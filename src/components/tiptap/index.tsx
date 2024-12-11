'use client';

import { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { cn } from '@/lib/utils';
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  BulletListIcon,
  ItalicIcon,
  LinkIcon,
  NumberListIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from './icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface TiptapProps {
  content?: string;
  onChange?: (content: string) => void;
}

export default function Tiptap({ content = '', onChange }: TiptapProps) {
  const [link, setLink] = useState('');

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus-visible:outline-theme rounded-xl p-5 pt-16',
      },
    },
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange?.(editor.getHTML());
    },
  });

  const handleHeading = useCallback(
    (value: string) => {
      if (value === 'p') {
        editor?.commands.setParagraph();
      } else {
        editor?.commands.setHeading({ level: Number(value) as 1 | 2 });
      }
    },
    [editor]
  );

  if (!editor) return null;

  const activeHeading = editor?.isActive('heading', { level: 1 })
    ? '1'
    : editor?.isActive('heading', { level: 2 })
      ? '2'
      : 'p';

  return (
    <div className="relative">
      <div className="sticky top-20 z-10 mx-auto my-2 flex w-fit flex-wrap justify-center gap-2 rounded-md bg-slate-100 p-2 text-slate-500 shadow-md">
        <Select
          defaultValue="4"
          value={activeHeading}
          onValueChange={handleHeading}
        >
          <SelectTrigger className="h-auto w-32 border-none bg-transparent p-0 px-2 text-base focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Heading" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Heading</SelectItem>
            <SelectItem value="2">Subheading</SelectItem>
            <SelectItem value="p">Paragraph</SelectItem>
          </SelectContent>
        </Select>

        <div className="w-[1px] bg-gray-300" />

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.commands.toggleBold()}
            disabled={!editor.can().toggleBold()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('bold') && 'text-theme'
            )}
          >
            <BoldIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.toggleItalic()}
            disabled={!editor.can().toggleItalic()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('italic') && 'text-theme'
            )}
          >
            <ItalicIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.toggleUnderline()}
            disabled={!editor.can().toggleUnderline()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('underline') && 'text-theme'
            )}
          >
            <UnderlineIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.toggleStrike()}
            disabled={!editor.can().toggleStrike()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('strike') && 'text-theme'
            )}
          >
            <StrikethroughIcon />
          </button>
        </div>

        <div className="w-[1px] bg-gray-300" />

        <Dialog>
          <DialogTrigger
            asChild
            disabled={
              !editor
                .can()
                .toggleLink({ href: editor.getAttributes('link').href })
            }
          >
            <button
              type="button"
              onClick={() => setLink(editor.getAttributes('link').href)}
            >
              <LinkIcon
                className={cn(
                  'hover:bg-theme/10',
                  editor.isActive('link') && 'text-theme'
                )}
              />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Please enter the link</DialogTitle>
              <DialogDescription>This should be a valid URL.</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input value={link} onChange={(e) => setLink(e.target.value)} />
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={() => editor.commands.setLink({ href: link })}
                >
                  Save
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="w-[1px] bg-gray-300" />

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.commands.setTextAlign('left')}
            disabled={!editor.can().setTextAlign('left')}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('textAlign', 'left') && 'text-theme'
            )}
          >
            <AlignLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.setTextAlign('center')}
            disabled={!editor.can().setTextAlign('center')}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('textAlign', 'center') && 'text-theme'
            )}
          >
            <AlignCenterIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.setTextAlign('right')}
            disabled={!editor.can().setTextAlign('right')}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('textAlign', 'right') && 'text-theme'
            )}
          >
            <AlignRightIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.setTextAlign('justify')}
            disabled={!editor.can().setTextAlign('justify')}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('textAlign', 'justify') && 'text-theme'
            )}
          >
            <AlignJustifyIcon />
          </button>
        </div>

        <div className="w-[1px] bg-gray-300" />

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.commands.toggleOrderedList()}
            disabled={!editor.can().toggleOrderedList()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('orderedList') && 'text-theme'
            )}
          >
            <NumberListIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.commands.toggleBulletList()}
            disabled={!editor.can().toggleBulletList()}
            className={cn(
              'hover:bg-theme/10',
              editor.isActive('bulletList') && 'text-theme'
            )}
          >
            <BulletListIcon />
          </button>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="-mt-16 rounded-xl outline outline-2 outline-gray-100"
      />
    </div>
  );
}
