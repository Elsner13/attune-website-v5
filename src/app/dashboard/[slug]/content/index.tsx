// src/app/dashboard/[slug]/content/index.tsx
'use client'

import { FallbackContent } from './FallbackContent'

type ContentComponent = React.ComponentType

const contentMap: Record<string, ContentComponent> = {}

// Lazy-load rich content — try/catch handles missing modules gracefully
try { contentMap['01'] = require('./module-01').default } catch (_) {}
try { contentMap['02'] = require('./module-02').default } catch (_) {}
try { contentMap['03'] = require('./module-03').default } catch (_) {}
try { contentMap['04'] = require('./module-04').default } catch (_) {}
try { contentMap['05'] = require('./module-05').default } catch (_) {}

export function getModuleContent(slug: string): ContentComponent {
  return contentMap[slug] ?? (() => <FallbackContent slug={slug} />)
}
