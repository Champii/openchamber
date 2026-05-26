import type { Extension } from '@codemirror/state';
import { drawSelection } from '@codemirror/view';
import { vim } from '@replit/codemirror-vim';

export function createVimModeExtensions(enabled: boolean | undefined): Extension[] {
  if (!enabled) {
    return [];
  }

  return [vim(), drawSelection()];
}
