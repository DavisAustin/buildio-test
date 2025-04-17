// This file is used to configure the tailwind-merge package
// and resolves conflicts between text color and text typography
import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            // ↓ `text` is the key of the namespace `--text-*`
            //      ↓ `body-lg` is the variable name in the namespace
            text: [
              'display',
              'title-lg',
              'title-md',
              'title-sm',
              'body-lg',
              'body-md',
              'body-sm',
              'body-xs',
              'caption',
            ],
        },
    },
})