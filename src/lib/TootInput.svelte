<script lang="ts">
	export let host: string;
	export let url: string;
</script>

<fieldset>
	<label title={host ? 'loading the toot from ' + host : 'where to load the toot'}>
		<div class="title">toot url</div>
		<input bind:value={url} placeholder=">" on:focus={(e) => e.currentTarget.select()} />
	</label>
</fieldset>
