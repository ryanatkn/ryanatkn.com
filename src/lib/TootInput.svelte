<script lang="ts">
	export let url: string;
	export let attrs: any = undefined;

	// TODO BLOCK show parse error
</script>

<fieldset>
	<label title="where to load the toot">
		<div class="title">toot url</div>
		<input bind:value={url} placeholder=">" on:focus={(e) => e.currentTarget.select()} {...attrs} />
	</label>
</fieldset>
