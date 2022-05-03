<script>  
  import {push, pop, replace} from 'svelte-spa-router'
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<button class="btn_menu_next" type="button" on:click={() => push('/')}>홈</button>
<button class="btn_menu_next" type="button" on:click={() => push('/signUp')}>회원가입</button>
<button class="btn_menu_next" type="button" on:click={() => push('/signUpInfo')}>유저정보</button>
<button class="btn_menu_next" type="button" on:click={() => push('/coReg')}>회사정보등록</button>
<button class="btn_menu_next" type="button" on:click={() => push('/login')}>로그인</button>
<button class="btn_menu_next" type="button" on:click={() => push('/viewMore')}>더보기</button>