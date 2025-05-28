<script lang="ts">
  import getStatus from '$lib/status';
  import { 
    BedDouble,
    TentTree,
    BookText,
    Code,
    Mail,
  } from 'lucide-svelte';
  import { 
    TwitterIcon, 
    InstagramIcon, 
    TelegramIcon, 
  } from '$lib/socialIcon';
  import { PUBLIC_STEAM_ID } from '$env/static/public';

  // Reactive values
  const status: number = getStatus();
  const time: string = new Date().toLocaleString();
  const year: number = new Date().getFullYear();

  // Status configuration
  const statusConfig = {
    1: {
      icon: BedDouble,
      text: 'Sleeping',
      color: 'text-red-500',
      message: 'You can message me through these methods, but I\'m sleeping.'
    },
    '-1': {
      icon: TentTree,
      text: 'Weekend!',
      color: 'text-green-500',
      message: 'You know its weekend...'
    },
    2: {
      icon: BookText,
      text: 'School',
      color: 'text-blue-500',
      message: 'You can contact me through these methods.'
    },
    3: {
      icon: Code,
      text: 'Free',
      color: 'text-indigo-500',
      message: 'You can contact me through these methods.'
    }
  };

  // Social links configuration
  const socialLinks = [
    {
      href: 'https://twitter.com/jianyuehugo',
      icon: TwitterIcon,
      class: 'hover:text-neutral-800'
    },
    {
      href: 'https://instagram.com/jianyuehugo',
      icon: InstagramIcon,
      class: 'text-pink-500 hover:text-pink-600'
    },
    {
      href: 'https://t.me/valorUnknown',
      icon: TelegramIcon,
      class: 'text-blue-500 hover:text-blue-600'
    },
  ];

  // Get current status info
  $: currentStatus = statusConfig[status as keyof typeof statusConfig];
</script>

<div class="mx-auto max-w-screen-lg p-8">
  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">JHL-HK's Current Status</h1>
    <div class="font-semibold mb-2 flex justify-center gap-2">
      {#if currentStatus}
        <svelte:component this={currentStatus.icon} class="inline-block {currentStatus.color}" />
        <span class="inline-block {currentStatus.color}">{currentStatus.text}</span>
      {:else}
        <span class="inline-block text-gray-500">Unknown</span>
      {/if}
    </div>
    <p class="text-gray-600">
      {currentStatus?.message || 'Status unknown.'}
    </p>    
    <hr class="my-4 border-gray-300"/>
    <div class="flex items-center justify-center gap-4 mt-4">
      {#each socialLinks as link}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center {link.class}"
          aria-label="Social media link"
        >
          {@html link.icon({ class: 'w-6 h-6' })}
        </a>
      {/each}
      <a
        href="mailto:ja@jhl.hk"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center text-gray-500 hover:text-gray-600"
        aria-label="Email"
      >
        <Mail class="w-7 h-7" />
      </a>
    </div>
  </div>

  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Gaming Status</h2>
    <hr class="my-4 border-gray-300"/>
    <div class="flex justify-center">
      <iframe 
        src="https://gamer2810.github.io/steam-miniprofile/?accountId={PUBLIC_STEAM_ID}&interactive=true"
        width=auto
        height="280" 
        frameborder="0"
        scrolling="no"
        class="rounded-lg overflow-hidden"
        title="Steam Profile">
      </iframe>
    </div>
  </div>

  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center text-gray-500">
    <p>Last Updated: {time} JST</p>
    <p class="text-sm">&copy; {year} JHL-HK</p>
  </div>
</div>