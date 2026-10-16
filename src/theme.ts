export type Mode = 'dark' | 'light';
export const palettes = {
  dark: { background: '#292827', surface: '#33312f', foreground: '#e7e2db', muted: '#aaa39b', keyword: '#f0ab91', string: '#e6c078', function: '#f2d4a5', type: '#dab0c5', error: '#f09b9b', selection: '#514941' },
  light: { background: '#eae7e3', surface: '#dedad5', foreground: '#393430', muted: '#6e655e', keyword: '#a1432d', string: '#86600d', function: '#8b542b', type: '#904769', error: '#b1353f', selection: '#d0c5ba' }
};
export type Platform = { name: string; detail: string; group: 'Editors' | 'Terminals' | 'More tools'; format?: string };
export const platforms: Platform[] = [
  {name:'VS Code',detail:'Visual Studio Code',group:'Editors',format:'vscode'},
  {name:'Cursor & Open VSX',detail:'Cursor, Windsurf, Kiro, VSCodium, Antigravity',group:'Editors',format:'vscode'},
  {name:'JetBrains',detail:'IntelliJ, PyCharm, WebStorm, RustRover, Android Studio',group:'Editors'},
  {name:'Zed',detail:'A fast, collaborative editor',group:'Editors',format:'zed'},
  {name:'Neovim',detail:'Lua colorscheme',group:'Editors',format:'neovim'},
  {name:'Vim',detail:'Vim colorscheme',group:'Editors',format:'vim'},
  {name:'Helix',detail:'Modal editor',group:'Editors',format:'helix'},
  {name:'Xcode',detail:'Apple development tools',group:'Editors'},
  {name:'Emacs',detail:'An extensible editor',group:'Editors'},
  {name:'Ghostty',detail:'A native terminal',group:'Terminals',format:'ghostty'},
  {name:'iTerm2',detail:'Terminal for macOS',group:'Terminals',format:'iterm'},
  {name:'Windows Terminal',detail:'Windows color scheme',group:'Terminals',format:'windows'},
  {name:'Warp',detail:'Terminal theme',group:'Terminals',format:'warp'},
  {name:'WezTerm',detail:'Lua color scheme',group:'Terminals',format:'wezterm'},
  {name:'Alacritty',detail:'TOML color scheme',group:'Terminals',format:'alacritty'},
  {name:'Moshi',detail:'Mobile terminal',group:'Terminals'},
  {name:'tmux',detail:'Terminal multiplexer',group:'More tools',format:'tmux'},
  {name:'Zellij',detail:'Terminal workspace',group:'More tools',format:'zellij'},
  {name:'Starship',detail:'Cross-shell prompt',group:'More tools',format:'starship'},
  {name:'Zsh',detail:'Interactive shell',group:'More tools',format:'zsh'},
  {name:'bat',detail:'Syntax-aware pager',group:'More tools'},
  {name:'eza',detail:'A modern ls replacement',group:'More tools',format:'eza'},
  {name:'Obsidian',detail:'Your notes, a little quieter',group:'More tools',format:'obsidian'},
  {name:'Home Assistant',detail:'Home dashboard',group:'More tools'},
  {name:'OpenCode',detail:'Terminal coding agent',group:'More tools'}
];
export function buildTheme(format: string, mode: Mode) {
  const p = palettes[mode];
  const name = `Cozy Gray ${mode === 'dark' ? 'Dark' : 'Light'}`;
  const ansi = [p.background,p.error,p.string,p.function,p.type,p.keyword,p.string,p.foreground,p.muted,p.error,p.string,p.function,p.type,p.keyword,p.string,p.foreground];
  const hex=(v:string)=>v.replace('#','');
  let content = '', extension = 'json';
  if(format === 'vscode') content=JSON.stringify({name,type:mode==='dark'?'dark':'light',colors:{'editor.background':p.background,'editor.foreground':p.foreground,'editorLineNumber.foreground':p.muted,'editorLineNumber.activeForeground':p.foreground,'editorCursor.foreground':p.string,'editor.selectionBackground':p.selection,'editor.lineHighlightBackground':p.surface,'sideBar.background':p.surface,'sideBar.foreground':p.foreground,'activityBar.background':p.surface,'activityBar.foreground':p.foreground,'statusBar.background':p.surface,'statusBar.foreground':p.foreground,'titleBar.activeBackground':p.surface,'titleBar.activeForeground':p.foreground,'tab.activeBackground':p.background,'tab.activeForeground':p.foreground,'tab.inactiveBackground':p.surface,'tab.inactiveForeground':p.muted,'terminal.background':p.background,'terminal.foreground':p.foreground},tokenColors:[['comment',p.muted],['keyword, storage',p.keyword],['string',p.string],['entity.name.function',p.function],['entity.name.type, support.type',p.type],['constant.numeric',p.keyword],['invalid',p.error]].map(([scope,foreground])=>({scope:scope.split(', '),settings:{foreground}}))},null,2);
  if(format === 'ghostty'){extension='';content=`# ${name}\nbackground = ${hex(p.background)}\nforeground = ${hex(p.foreground)}\ncursor-color = ${hex(p.string)}\nselection-background = ${hex(p.selection)}\nselection-foreground = ${hex(p.foreground)}\n`+ansi.map((v,i)=>`palette = ${i}=${hex(v)}`).join('\n');}
  if(format === 'windows')content=JSON.stringify({name,background:p.background,foreground:p.foreground,cursorColor:p.string,selectionBackground:p.selection,...Object.fromEntries(['black','red','green','yellow','blue','purple','cyan','white','brightBlack','brightRed','brightGreen','brightYellow','brightBlue','brightPurple','brightCyan','brightWhite'].map((n,i)=>[n,ansi[i]]))},null,2);
  if(format==='zed')content=JSON.stringify({$schema:'https://zed.dev/schema/themes/v0.2.0.json',name,author:'Cozy Gray',themes:[{name,appearance:mode,style:{background:p.background,'editor.background':p.background,'editor.foreground':p.foreground,'text':p.foreground,'text.muted':p.muted,'panel.background':p.surface,'terminal.background':p.background,'terminal.foreground':p.foreground,syntax:Object.fromEntries(['comment','keyword','string','function','type','number'].map(k=>[k,{color:p[k==='comment'?'muted':k==='number'?'keyword':k as keyof typeof p]}]))}}]},null,2);
  if(format==='alacritty'){extension='toml';content=`# ${name}\n[colors.primary]\nbackground = "${p.background}"\nforeground = "${p.foreground}"\n[colors.cursor]\ntext = "${p.background}"\ncursor = "${p.string}"\n[colors.normal]\n`+['black','red','green','yellow','blue','magenta','cyan','white'].map((n,i)=>`${n} = "${ansi[i]}"`).join('\n')+'\n[colors.bright]\n'+['black','red','green','yellow','blue','magenta','cyan','white'].map((n,i)=>`${n} = "${ansi[i+8]}"`).join('\n');}
  if(format==='wezterm'){extension='toml';content=`[colors]\nforeground = '${p.foreground}'\nbackground = '${p.background}'\ncursor_bg = '${p.string}'\ncursor_fg = '${p.background}'\nselection_bg = '${p.selection}'\nselection_fg = '${p.foreground}'\nansi = [${ansi.slice(0,8).map(v=>`'${v}'`).join(', ')}]\nbrights = [${ansi.slice(8).map(v=>`'${v}'`).join(', ')}]\n[metadata]\nname = '${name}'`}
  if(format==='warp'){extension='yaml';content=`name: '${name}'\naccent: '${p.string}'\nbackground: '${p.background}'\nforeground: '${p.foreground}'\ndetails: '${mode === 'dark' ? 'darker' : 'lighter'}'\nterminal_colors:\n  normal:\n`+['black','red','green','yellow','blue','magenta','cyan','white'].map((n,i)=>`    ${n}: '${ansi[i]}'`).join('\n')+'\n  bright:\n'+['black','red','green','yellow','blue','magenta','cyan','white'].map((n,i)=>`    ${n}: '${ansi[i+8]}'`).join('\n');}
  if(format==='vim'||format==='neovim'){extension=format==='vim'?'vim':'lua';const groups={Normal:[p.foreground,p.background],Comment:[p.muted,'NONE'],String:[p.string,'NONE'],Function:[p.function,'NONE'],Keyword:[p.keyword,'NONE'],Statement:[p.keyword,'NONE'],Type:[p.type,'NONE'],Constant:[p.keyword,'NONE'],Identifier:[p.foreground,'NONE'],Visual:[p.foreground,p.selection],LineNr:[p.muted,p.background],CursorLine:[p.foreground,p.surface],Error:[p.error,p.background]};content=format==='vim'?`set background=${mode}\nhighlight clear\nlet g:colors_name = 'cozy-gray-${mode}'\n`+Object.entries(groups).map(([g,[fg,bg]])=>`highlight ${g} guifg=${fg} guibg=${bg}`).join('\n'):`vim.o.background = '${mode}'\nvim.cmd('highlight clear')\nvim.g.colors_name = 'cozy-gray-${mode}'\n`+Object.entries(groups).map(([g,[fg,bg]])=>`vim.api.nvim_set_hl(0, '${g}', { fg = '${fg}', bg = '${bg}' })`).join('\n');}
  if(format==='helix'){extension='toml';content=`# ${name}\n"ui.background" = { bg = "${p.background}" }\n"ui.text" = "${p.foreground}"\n"ui.selection" = { bg = "${p.selection}" }\n"ui.cursor" = { bg = "${p.string}", fg = "${p.background}" }\n"ui.linenr" = "${p.muted}"\n"comment" = "${p.muted}"\n"keyword" = "${p.keyword}"\n"string" = "${p.string}"\n"function" = "${p.function}"\n"type" = "${p.type}"\n"constant" = "${p.keyword}"`}
  if(format==='iterm'){extension='itermcolors';const color=(key:string,v:string)=>`<key>${key}</key><dict>${['Red','Green','Blue'].map((c,i)=>`<key>${c} Component</key><real>${parseInt(v.slice(i*2+1,i*2+3),16)/255}</real>`).join('')}<key>Color Space</key><string>sRGB</string></dict>`;content=`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict>${color('Background Color',p.background)}${color('Foreground Color',p.foreground)}${color('Cursor Color',p.string)}${color('Selection Color',p.selection)}${ansi.map((v,i)=>color(`Ansi ${i} Color`,v)).join('')}</dict></plist>`}
  if(format==='tmux'){extension='conf';content=`# ${name}\nset -g status-style 'bg=${p.surface},fg=${p.foreground}'\nset -g pane-border-style 'fg=${p.surface}'\nset -g pane-active-border-style 'fg=${p.string}'\nset -g message-style 'bg=${p.surface},fg=${p.foreground}'\nset -g mode-style 'bg=${p.selection},fg=${p.foreground}'`}
  if(format==='zellij'){extension='kdl';content=`themes {\n  cozy-gray-${mode} {\n${[['fg',p.foreground],['bg',p.background],['black',p.surface],['red',p.error],['green',p.string],['yellow',p.function],['blue',p.type],['magenta',p.keyword],['cyan',p.string],['white',p.foreground],['orange',p.function]].map(([k,v])=>`    ${k} "${v}"`).join('\n')}\n  }\n}`}
  if(format==='starship'){extension='toml';content=`# ${name}\n# Merge these settings with your existing starship.toml.\npalette = 'cozy_gray_${mode}'\n[palettes.cozy_gray_${mode}]\ngray = '${p.foreground}'\namber = '${p.string}'\nstone = '${p.muted}'\nrose = '${p.error}'\n[directory]\nstyle = 'amber'\n[character]\nsuccess_symbol = '[>](amber)'\nerror_symbol = '[>](rose)'\n[git_branch]\nstyle = 'stone'`}
  if(format==='zsh'){extension='zsh';content=`# ${name}\n# Source this file from ~/.zshrc.\nautoload -Uz colors && colors\nPROMPT='%F{${p.string}}%~%f %F{${p.foreground}}%#%f '\nZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=${p.muted}'`}
  if(format==='eza'){extension='yml';content=`# ${name}\ncolourful: false\nfilekinds:\n  normal: { foreground: '${p.foreground}' }\n  directory: { foreground: '${p.string}', is_bold: true }\n  symlink: { foreground: '${p.function}' }\nperms:\n  user_read: { foreground: '${p.string}' }\n  user_write: { foreground: '${p.keyword}' }\n  user_execute_file: { foreground: '${p.function}' }`}
  if(format==='obsidian'){extension='css';content=`/* ${name}: an Obsidian CSS snippet, not a community theme. */\n.theme-${mode} {\n  --background-primary: ${p.background};\n  --background-secondary: ${p.surface};\n  --text-normal: ${p.foreground};\n  --text-muted: ${p.muted};\n  --text-accent: ${p.string};\n  --interactive-accent: ${p.string};\n  --text-selection: ${p.selection};\n  --code-normal: ${p.foreground};\n  --code-background: ${p.surface};\n}`}
  if(!content){content=JSON.stringify({name,variant:mode,status:'Palette reference; native port not yet implemented',colors:p},null,2)}
  return {content,filename:`cozy-gray-${mode}${extension?'.'+extension:''}`,name};
}

export function installSteps(platform: Platform, mode: Mode) {
  const f=platform.format;
  const n=`cozy-gray-${mode}`;
  const steps: Record<string,string[]> = {
    vscode:[`Download the JSON theme file below.`, `Create a theme extension folder with a package.json declaring this file under contributes.themes. Copy that folder to ~/.vscode/extensions (or your editor’s extensions folder).`, `Reload your editor, open “Preferences: Color Theme”, and choose Cozy Gray ${mode==='dark'?'Dark':'Light'}.`],
    ghostty:[`Save the file to ~/.config/ghostty/themes/${n}.`,`Add theme = ${n} to your Ghostty configuration.`,`Reload the configuration to apply your palette.`],
    zed:[`Save the JSON file to ~/.config/zed/themes/${n}.json.`,`Open the theme selector and choose Cozy Gray ${mode==='dark'?'Dark':'Light'}.`],
    neovim:[`Save the Lua file to ~/.config/nvim/colors/${n}.lua.`,`Run :colorscheme ${n}, then add that command to your configuration.`],
    vim:[`Save the Vim file to ~/.vim/colors/${n}.vim.`,`Run :colorscheme ${n}. Enable termguicolors for true-color support.`],
    helix:[`Save to ~/.config/helix/themes/${n}.toml.`,`Set theme = "${n}" in your Helix config.toml.`],
    alacritty:[`Save the TOML file to your Alacritty configuration directory.`,`Add its full path to the general.import array in alacritty.toml.`],
    wezterm:[`Save to ~/.config/wezterm/colors/${n}.toml.`,`Set config.color_scheme = 'Cozy Gray ${mode==='dark'?'Dark':'Light'}' in wezterm.lua.`],
    iterm:[`Open iTerm2 → Settings → Profiles → Colors.`,`Choose Color Presets → Import, select the .itermcolors file, then choose the imported preset.`],
    windows:[`Open Windows Terminal Settings → Open JSON file.`,`Add the downloaded object to the schemes array. Set your profile’s colorScheme to “Cozy Gray ${mode==='dark'?'Dark':'Light'}”.`],
    warp:[`Save the YAML file to ~/.warp/themes/${n}.yaml.`,`Open Warp Settings → Appearance → Themes and select Cozy Gray.`],
    tmux:[`Save the .conf file in your tmux configuration directory.`,`Add source-file /full/path/${n}.conf to ~/.tmux.conf, then reload tmux.`],
    zellij:[`Save to ~/.config/zellij/themes/${n}.kdl.`,`Set theme "${n}" in your Zellij configuration.`],
    starship:[`Merge the downloaded TOML settings into ~/.config/starship.toml.`,`Keep your existing prompt configuration; the palette and listed modules supply the new colors.`],
    zsh:[`Save the file somewhere permanent.`,`Add source /full/path/${n}.zsh to ~/.zshrc, then start a new shell.`],
    eza:[`Save to ~/.config/eza/theme.yml.`,`Run eza to use the color overrides. Merge with any existing theme instead of replacing it.`],
    obsidian:[`Save to your vault’s .obsidian/snippets/${n}.css.`,`Open Settings → Appearance → CSS snippets, refresh, and enable the snippet. Use the matching app appearance.`]
  };
  return f ? steps[f] || [] : [`A native ${platform.name} port is planned. Download the palette reference to use the colors in a custom setup.`, 'The palette JSON is a color reference, not an installable native theme.'];
}
