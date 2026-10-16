import { buildTheme, installSteps, type Mode, type Platform } from '../theme.ts';

export const themeSite = 'https://cozygray.marsolab.com';

export function platformSlug(platform: Platform) {
  return platform.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function themeFilePath(platform: Platform, mode: Mode) {
  const format = platform.format || 'palette';
  return `/themes/${format}/${buildTheme(format, mode).filename}`;
}

export function agentInstallPrompt(platform: Platform, mode: Mode) {
  const name = `Cozy Gray ${mode === 'dark' ? 'Dark' : 'Light'}`;
  const guide = `${themeSite}/install/${platformSlug(platform)}.md`;
  const file = `${themeSite}${themeFilePath(platform, mode)}`;
  if (!platform.format) {
    return `Help me explore ${name} for ${platform.name}. A native port is planned, not available. Read ${guide} and the palette reference at ${file}. Explain what is supported and what would be needed to create a native theme. Do not treat the palette JSON as an installable theme or claim it is installed.`;
  }
  return `Install ${name} for ${platform.name} in my setup.\n\nRead the installation guide: ${guide}\nDownload the theme file: ${file}\n\nDetect my operating system, exact application, and active configuration path first; ask if the target is ambiguous. Inspect the downloaded file before using it. Back up existing configuration, merge only the necessary theme settings, and preserve unrelated preferences. These are initial theme configurations, not marketplace extensions; verify compatibility with my installed application version. Do not use sudo or overwrite existing settings wholesale.\n\nSuggested steps:\n${installSteps(platform, mode).map((step, index) => `${index + 1}. ${step}`).join('\n')}\n\nIf you have local file access, apply and validate the changes, then tell me what changed, how to activate the theme, and how to undo it. If you cannot access my machine, provide exact steps for me to run and do not claim the installation is complete.`;
}

export function agentInstallGuide(platform: Platform) {
  return `# Cozy Gray for ${platform.name}\n\n${platform.format ? 'Initial native theme configuration. Target-application validation is still in progress; check compatibility with the installed version.' : 'Planned native port. Downloads are palette references, not installable themes.'}\n\nSource: https://github.com/marsolab/cozygray\n\n${(['light', 'dark'] as const).map(mode => `## ${mode === 'dark' ? 'Dark' : 'Light'} appearance\n\nFile: ${themeSite}${themeFilePath(platform, mode)}\n\n${installSteps(platform, mode).map((step, index) => `${index + 1}. ${step}`).join('\n')}`).join('\n\n')}\n\n## Before making changes\n\nIdentify the exact application, version, operating system, and active configuration path. Preserve a backup and merge theme settings without replacing unrelated preferences. Inspect downloaded contents before use. Do not run arbitrary scripts or use elevated privileges. If local access is unavailable, give manual steps. Report actual validation and explain how to restore the previous theme.\n`;
}
