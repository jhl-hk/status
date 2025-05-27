<script lang="ts">
  import getStatus from '$lib/status';
  import { 
    BedDouble,
    TentTree,
    BookText,
    Code
  } from 'lucide-svelte';
  import { 
    TwitterIcon, 
    InstagramIcon, 
    GitHubIcon, 
    TelegramIcon, 
    DiscordIcon 
  } from '$lib/socialIcon';

  const status = getStatus();
  console.log(status);
  const time = new Date().toLocaleString();
  const year = new Date().getFullYear();
</script>

<div class="mx-auto max-w-screen-lg p-8">
  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">JHL-HK's Current Status</h1>
    <p class="font-semibold mb-2 flex justify-center gap-2">
      {#if status === 1}
        <BedDouble class="inline-block text-red-500" />
        <span class="inline-block text-red-500">Sleeping</span>
      {:else if status === -1}
        <TentTree class="inline-block text-green-500" />
        <span class="inline-block text-green-500">Weekend!</span>
      {:else if status === 2}
        <BookText class="inline-block text-blue-500" />
        <span class="inline-block text-blue-500">Schools</span>
      {:else if status === 3}
        <Code class="inline-block text-indigo-500" />
        <span class="inline-block text-indigo-500">Free</span>
      {:else}
        <span class="inline-block text-gray-500">Unknown</span>
      {/if}
    </p>
    <p class="text-gray-600">
      {#if status === 1}
        You can message me through these methods, but I'm sleeping.
      {:else if status === -1}
        You know its weekend...
      {:else}
        You can contact me through these methods.
      {/if}
    </p>    
    <hr class="my-4 border-gray-300"/>
    <div class="flex items-center justify-center gap-4 mt-4">
      <a href="https://twitter.com/jianyuehugo" target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-neutral-800">
        {@html TwitterIcon({ class: 'w-6 h-6' })}
      </a>
      <a href="https://instagram.com/jianyuehugo" target="_blank" rel="noopener noreferrer" class="flex items-center text-pink-500 hover:text-pink-600">
        {@html InstagramIcon({ class: 'w-6 h-6' })}
      </a>
      <a href="https://t.me/valorUnknown" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-500 hover:text-blue-600">
        {@html TelegramIcon({ class: 'w-6 h-6' })}
      </a>
    </div>
  </div>

  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Status</h2>
    <hr class="my-4 border-gray-300"/>

  </div>

  <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg text-center text-gray-500">
    <p>Last Updated: {time} JST</p>
    <p class="text-sm">&copy; {year} JHL-HK</p>
  </div>
</div>