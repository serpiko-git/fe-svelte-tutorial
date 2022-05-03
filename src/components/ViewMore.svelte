<script>  
  import Footer from './Footer.svelte'
  let leftArrSrc = './build/img/arrow.png';  
  let profileSrc = './build/img/view_more_profile.png'
  let rightArrSrc = './build/img/ico_page_next.png';
  
</script>

<div id="wrap">
  <div id="common_sub_top_bar">
    <div class="common_sub_top_bar_Menu">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={leftArrSrc} />
    </div>
    <div class="common_sub_top_bar_Menu">더보기</div>
    <div class="common_sub_top_bar_Menu"></div>
  </div>
  <div id="container">
    <div>
      프로필
    </div>
    <div id="viewMoreMenuDiv">
      <div id="viewMoreListDiv">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={profileSrc}>
        <span>내 정보 관리</span>
      </div> 
      <div id="arrowDiv">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={rightArrSrc} />
      </div>
    </div>
  </div>  
  <Footer />
</div>

