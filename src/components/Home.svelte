<script>  
	import Footer from './Footer.svelte'
	let homeImgSrc = './build/img/home.png';  
  let issueImgSrc = './build/img/home_issue.png';
</script>

<div id="wrap">
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={homeImgSrc} id="mainImg"/>
  </div>
  <div id="container">
    <div id="homeIssueImg">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={issueImgSrc} />
    </div>
  </div>
  <Footer />
</div>
