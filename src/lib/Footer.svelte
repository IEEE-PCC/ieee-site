<script lang="ts">
	import { base } from '$app/paths';
</script>

<main>
	<footer class="bg-[#1e73ae] p-10 shadow-lg">
		<div class="grid grid-cols-1 gap-8 text-white sm:grid-cols-3">
			<!-- Logo and Description -->
			<div>
				<img src="{base}/images/ieee-mb-white.png" alt="IEEE Logo" class="mb-4 h-24" />
				<p class="text-sm leading-relaxed">
					IEEE Student Branch – Empowering future engineers through innovation, learning, and
					professional development.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-3 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="hover:underline">Home</a></li>
					<li><a href="{base}/calendar" class="hover:underline">Calendar</a></li>
					<li><a href="{base}/officers" class="hover:underline">Officers</a></li>
					<li><a href="{base}/about" class="hover:underline">About</a></li>
					<li><a href="{base}/membership" class="hover:underline">Membership</a></li>
				</ul>
			</div>

			<!-- Contact Info and Social Media -->
			<div>
				<h3 class="mb-3 text-lg font-semibold">Contact</h3>
				<ul class="space-y-1 text-sm">
					<li>250 Brent Lane, Pensacola, FL 32503</li>
					<li>(123) 146-7890</li>
					<li><a href="mailto:email@email.com" class="hover:underline">email@email.com</a></li>
				</ul>
				<div class="mt-4">
					<h3 class="mb-3 text-lg font-semibold">Follow Us</h3>
					<div class="flex space-x-4">
						<a href="#" aria-label="Discord" class="hover:text-gray-300">
							<i class="fa-brands fa-discord fa-xl"></i>
						</a>
						<a href="#" aria-label="Instagram" class="hover:text-gray-300">
							<i class="fa-brands fa-instagram fa-xl"></i>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<p class="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white">
			© 2025 IEEE Student Branch – All rights reserved.
		</p>
	</footer>
</main>
