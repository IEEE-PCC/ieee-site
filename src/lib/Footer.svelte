<script lang="ts">
	import { base } from '$app/paths';
</script>

<main>
	<footer class="bg-[#1e73ae] p-10 text-white shadow-lg">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			<!-- Logo and Description -->
			<div class="flex flex-col items-center sm:items-start">
				<img src="{base}/images/ieee-mb-white.png" alt="IEEE Logo" class="mb-4 h-24" />
				<p class="text-center text-sm leading-relaxed sm:text-left">
					IEEE Student Branch – Empowering future engineers through innovation, learning, and
					professional development.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="flex flex-col items-center sm:items-start">
				<h3 class="mb-3 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="{base}/"
							class="transition-all duration-200 hover:text-gray-300 hover:underline">Home</a
						>
					</li>
					<li>
						<a
							href="{base}/calendar"
							class="transition-all duration-200 hover:text-gray-300 hover:underline">Calendar</a
						>
					</li>
					<li>
						<a
							href="{base}/officers"
							class="transition-all duration-200 hover:text-gray-300 hover:underline">Officers</a
						>
					</li>
					<li>
						<a
							href="{base}/about"
							class="transition-all duration-200 hover:text-gray-300 hover:underline">About</a
						>
					</li>
					<li>
						<a
							href="{base}/history"
							class="transition-all duration-200 hover:text-gray-300 hover:underline">History</a
						>
					</li>
				</ul>
			</div>

			<!-- Contact Info and Social Media -->
			<div class="flex flex-col items-center sm:items-start">
				<h3 class="mb-3 text-lg font-semibold">Contact</h3>
				<ul class="space-y-1 text-sm">
					<li>250 Brent Lane, Pensacola, FL 32503</li>
					<li>
						<a
							href="mailto:email@email.com"
							class="transition-all duration-200 hover:text-gray-300 hover:underline"
							>pcc.ieee@gmail.com</a
						>
					</li>
				</ul>
				<div class="mt-4">
					<h3 class="mb-3 text-lg font-semibold">Follow Us</h3>
					<div class="flex space-x-6">
						<a
							href="https://discord.gg/yuGwMKaPAJ"
							aria-label="Discord"
							class="transition-all duration-200 hover:text-gray-300"
						>
							<i class="fa-brands fa-discord fa-xl"></i>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<p class="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white">
			© 2025 PCC Student Branch of IEEE – All rights reserved.
		</p>
	</footer>
</main>
