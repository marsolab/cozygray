import type { APIRoute, GetStaticPaths } from 'astro';
import { platforms } from '../../theme';
import { agentInstallGuide, platformSlug } from '../../lib/agent-install';

export const getStaticPaths: GetStaticPaths = () => platforms.map(platform => ({
  params: { tool: platformSlug(platform) },
  props: { content: agentInstallGuide(platform) },
}));

export const GET: APIRoute = ({ props }) => new Response(props.content, {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
});
