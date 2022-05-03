<script>  
  import {push, pop, replace} from 'svelte-spa-router'
	let leftArrSrc = './build/img/arrow.png';  
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
    <div id="userInfoContent">
      <div class="userInfoDiv">
        <div class="userInfoTitleDiv">
          <div class="userInfoTitle">
            <span>이름<font color="blue">(필수)</font></span>
          </div>
          <div class="userInfoFocus">
            <span>* 이름을 입력해주세요.</span>
          </div>
        </div>        
        <div>
          <input class="userInfoInput" placeholder="고객님의 이름을 입력해주세요." type="text" />
        </div> 
      </div>
      <div class="userInfoDiv">
        <div class="userInfoTitleDiv">
          <div class="userInfoTitle">
            <span>아이디<font>(필수)</font></span>
          </div>
          <div class="userInfoFocus">
            <span>* 이메일을 입력해주세요.</span>
          </div>
        </div>        
        <input class="userInfoInput" placeholder="이메일을 입력해주세요" type="text" />
        <button type="button">이메일인증</button>
      </div>
      <div class="userInfoDiv">
        <div class="userInfoTitleDiv">
          <div class="userInfoTitle">
            <span>비밀번호<font color="blue">(필수)</font></span>
          </div>
          <div class="userInfoFocus">
            <span>* 비밀번호를 입력해주세요.</span>
          </div>
        </div>              
        <input class="userInfoInput" placeholder="사용할 비밀번호를 입력해주세요." type="text" />
        <input class="userInfoInput" placeholder="비밀번호를 다시 한번 입력해주세요." type="text" />
      </div>
      <div class="userInfoDiv">
        <div class="userInfoTitleDiv">
          <div class="userInfoTitle">
            <span>휴대전화번호<font color="blue">(필수)</font></span>
          </div>
          <div class="userInfoFocus">
            <span>* 휴대전화번호를 입력해주세요.</span>
          </div>
        </div>                
        <input class="userInfoInput" placeholder="010-0000-0000" type="number" />
      </div>
    </div>
  </div>
  <div class="signUpBtn">
    <div>
      <button class="btn_menu_cancel" type="button" on:click={() => push('/')}>취소</button>
    </div>
    <div>
      <button class="btn_menu_next" type="button" on:click={() => push('/coReg')}>가입완료</button>    
    </div>    
  </div>
  <div class="footerLogo">
    ⓒURBAN DATA LAB
  </div>  
</div>
