# Check if correct number of arguments provided
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <directory> <filename> <extension>"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_constants.sh"

directory="$1"
filename="$2"
extension="$3"

# Create index.ts file
if [ "$extension" = "ts" ]; then

  index_file_path="packages/$directory/src/$filename/index.ts"
  # Check if file already exists
  if [ -e "$index_file_path" ]; then
    echo -e "Skip:\tFile $index_file_path already exists in packages/$directory/src/$filename."
    exit 1
  fi

  cat <<EOF >"$index_file_path"
export * from "./${filename}";
export { default } from "./${filename}";
EOF

  echo -e "${GREEN}  + $index_file_path${NC}"
  exit 0
fi

# Set file path
file_path="packages/$directory/src/$filename/$filename.$extension"

# Check if file already exists
if [ -e "$file_path" ]; then
  echo -e "Skip:\tFile $file_path already exists in packages/$directory/src/$filename."
  exit 1
fi

# Create the file with proper indentation
if [ "$extension" = "scss" ]; then
  cat <<EOF >"$file_path"
.YnI-${filename} {

}
EOF

# Create tsx file
elif [ "$extension" = "tsx" ]; then

  cat <<EOF >"$file_path"
import React from 'react';
import classNames from "classnames";
import './$filename.scss'

export type ${filename}Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & ${filename}PropsType;

type ${filename}PropsType = {};

export const $filename = ({...props}: ${filename}Props) => {
  return (
    <div {...props} className={classNames("YnI-${filename}", props.className)}>
      {props.children ?? "$filename"}
    </div>
  );
}

export default $filename;
EOF

# Create stories.tsx file
elif [ "$extension" = "stories.tsx" ]; then
  cat <<EOF >"$file_path"
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import $filename, { ${filename}Props } from "./$filename";
import styles from "./$filename.scss";
import classNames from "classnames";

const meta = {
  component: $filename,
  title: "$directory/$filename",
  tags: ["autodocs"],
} satisfies Meta<typeof $filename>;

export default meta;

type Story = StoryObj<typeof $filename>;

const cx = classNames.bind(styles);

const Template = (args: ${filename}Props) => { 
  return (
    <$filename {...args} ></$filename>
  )
};

export const Default: Story = Template.bind({});
EOF
fi

echo -e "${GREEN}  + $file_path${NC}"
exit 0
