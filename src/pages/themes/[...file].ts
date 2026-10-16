import type { APIRoute, GetStaticPaths } from 'astro';
import { buildTheme, platforms } from '../../theme';

export const getStaticPaths: GetStaticPaths = () => {
  const formats = [...new Set(platforms.map(platform => platform.format || 'palette'))];
  return formats.flatMap(format => (['light', 'dark'] as const).map(mode => {
    const file = buildTheme(format, mode);
    return { params: { file: `${format}/${file.filename}` }, props: { content: file.content } };
  }));
};

export const GET: APIRoute = ({ props }) => new Response(props.content, {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
