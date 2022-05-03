<script>
  import {push, pop, replace} from 'svelte-spa-router'
</script>

<div class="nav_bar">
  <button class="btn_menu_home on" type="button"
  on:click={() => push('/')}>홈</button>
  <button class="btn_menu_trend" type="button" on:click={() => push('/signUp')}>트렌드</button>
  <button class="btn_menu_favorite" type="button">관심</button>
  <button class="btn_menu_ai" type="button">AI분석</button>
  <button class="btn_menu_more" type="button" on:click={() => push('/Login')}>더보기</button>
</div>

