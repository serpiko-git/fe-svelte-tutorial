<script>  
  import {push, pop, replace} from 'svelte-spa-router'
  import { slide } from 'svelte/transition';
	let leftArrSrc = './build/img/arrow.png';  
  let downArrSrc = './build/img/ico_arr_down.png'
  let serviceAgree = false;
  let privacyAgree = false;  
  let marketingAgree = false;

  function privacyClick(val) {
    if(val === 1) {
      if(serviceAgree === false){
        serviceAgree = true;
      } else {      
        serviceAgree = false;
     }
    } else if (val === 2){
      if(privacyAgree === false){
        privacyAgree = true;
      } else {      
        privacyAgree = false;
      }
    } else {
      if(marketingAgree === false){
        marketingAgree = true;
      } else {      
        marketingAgree = false;
      }
    }    
  }

</script>

<div id="wrap">
  <div id="common_sub_top_bar">
    <div class="common_sub_top_bar_Menu">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={leftArrSrc} />
    </div>
    <div class="common_sub_top_bar_Menu">회원가입</div>
    <div class="common_sub_top_bar_Menu"></div>
  </div>
  <div id="container">
    <div id="terms">
      <span id="termsAgree">약관 동의</span>
      <div id="termsChk">
        <div id="termsAllChk">
          <div class="commonTermsSub">
            <input type="checkbox" />
          </div>
          <div class="commonTermsSubText">
            <span>사용자 약관 전체 동의</span>   
          </div>  
          <div class="commonTermsSub">
          </div> 
        </div>
        <div class="commonTerms">
          <div class="commonTermsSub">
            <input type="checkbox"/>
          </div> 
          <div class="commonTermsSubText" on:click={ () => privacyClick(1)}>
            <span>서비스 이용 약관 동의 (필수)</span> 
          </div>
          <div class="commonTermsSub">
            <!-- svelte-ignore a11y-missing-attribute -->              
            <img src={downArrSrc}> 
          </div>    
        </div>
        <!-- 서비스 -->
        {#if serviceAgree}               
          <div transition:slide class="termSlide">
            서비스 이용
          </div>
        {/if}
        <div class="commonTerms">
          <div class="commonTermsSub">
            <input type="checkbox" />
          </div> 
          <div class="commonTermsSubText" on:click={ () => privacyClick(2)}>
            <span>개인정보 취급방침 동의(필수)</span>            
          </div>
          <div class="commonTermsSub">
            <!-- svelte-ignore a11y-missing-attribute -->              
            <img src={downArrSrc}> 
          </div>
        </div>
        <!-- 개인 정보 -->
        {#if privacyAgree}               
          <div transition:slide class="termSlide">
            개인정보
          </div>
        {/if}
        <div class="commonTerms">
          <div class="commonTermsSub">
            <input type="checkbox"/>
          </div> 
          <div class="commonTermsSubText" on:click={ () => privacyClick(3)}>
            <span>마케팅 정보 수신 동의(필수)</span>   
          </div>
          <div class="commonTermsSub">
            <!-- svelte-ignore a11y-missing-attribute -->              
            <img src={downArrSrc}> 
          </div>
        </div>
        <!-- 마케팅 -->
        {#if marketingAgree}               
          <div transition:slide class="termSlide">
            <div>
              마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅
              마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅마케팅
            </div>            
          </div>
        {/if}
      </div>
    </div>   
  </div>
  <div class="signUpBtn">
    <div>
      <button class="btn_menu_cancel" type="button">취소</button>
    </div>
    <div>
      <button class="btn_menu_next" type="button" on:click={() => push('/signUpInfo')}>다음</button>    
    </div>    
  </div>
  <div class="footerLogo">
    ⓒURBAN DATA LAB
  </div>  
</div>
