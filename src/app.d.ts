/// <reference types="@cloudflare/workers-types" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			authenticated?: boolean;
		}
		// interface PageData {}
		// interface Error {}
		interface Platform {
			env: {
				SITE_DATA: KVNamespace;
				ADMIN_PASSWORD?: string;
			};
			context: { waitUntil(promise: Promise<unknown>): void };
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
