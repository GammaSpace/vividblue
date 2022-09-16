<script>
  import { socialDiscs, bullet } from "../data/svg";

  const studioName = "Vivid Blue";

  const founderName = "Nate Tannis"

  const menu = [
    [`ABOUT`,`about`],
    [`DUSKWITCH`, `duskwitch`],
    [`FOUNDER`, `founder`],
  ];

  const gameDesc =
    "VIVIDBLUE LTD’s first game is <i>Duskwitch: Heroic Soul</i>, a character action game where the main character, Rutie, is a light skinned Black witch with a kick-ass redemption story.<br/><br/>Rutie takes us on a journey of restorative justice...taking responsibility for her part in causing the apocalypse, tackling powerful systems run by a secret few, and emancipating herself from both as she strides straight into her purpose as a freedom fighter for lost soul survivors of injustice.<br/><br/>As the Duskwitch, Rutie is intentional with every shot from her weapon, using <i>soul-bullets</i> to fight her enemies, using them to heal her targets of their negative karma, and ultimately breathing life and love back into the world.<br/><br/><i>Duskwitch</i> invites players to make choices of consequence through Rutie and her cast of characters. Could her choices rehabilitate both lost souls and enemies? Could these empower the other characters in her midst?<br/><br/>Come check out the divergent styles of character action gameplay and go deep into the contradictions of who we are and how we relate to each other... Where you’re not simply destroying your enemies, but where each character has their own unique fighting form that tells their personal story.<br/><br/>With music, beats, physicality, sensuality, history, and cultural styles as our battle gear and mechanics, <i>Duskwitch: Heroic Soul</i> is anime as hell … but from worlds that bring the cultural richness of real life beyond fantasy.";

  const studioAbout = 
    "VIVIDBLUE LTD’s vision is to build narratives around BIPOC main characters and the rich stories of who they are, the colours, struggles and triumphs of their journeys, and the redemptive impact they have on themselves and others.<br/><br/>By tying these themes to game mechanics, exploring divergent styles of character action gameplay, expanding the potential influence of partner NPCs, and building out soundscapes with deep cultural fusions, our goal is to make rich game worlds that reflect the worlds we live and the worlds we want.";

  const founderBio =
    "Nate Tannis is a Toronto native of Jamaican descent. At  age five he fell in love with gaming and instantly began visioning the genre of BIPOC abundant worlds that he’d want to play.<br/><br/>Following his dream, Nate turned his science degree from Toronto Met U into creative gold at Centennial College, honing expertise in character design and animation that he now passes on to his students at Vancouver’s Visual College of Art & Design.<br/><br/>In 2019  Nate’s game studio VIVIDBLUE LTD was born, and in 2022 Nate’s first major game began production thanks to support from the Weird Ghosts Impact Investment Fund and Gamma Space Collaborative.";

  const features = [
    "Combo-focused character action for expressive player combat!",
    "Fluid anime-inspired animation!",
    "A world of reclamation and reflection inspired by Afrofuturism!"
  ];

  const socials = [
    ["Wishlist!", "https://store.steampowered.com/app/1624000/Duskwitch_Heroic_Soul/", socialDiscs.steam],
    ["Discord", "https://discord.gg/N8uYGzg8ky", socialDiscs.discord],
    ["Twitch", "https://www.twitch.tv/vividblue", socialDiscs.twitch],
    ["Twitter", "https://twitter.com/vividblueltd", socialDiscs.twitter],
  ]

  const theLatest = [
    ["VIVIDBLUE founder Nate Tannis speaking at GDOC 2022 on September 17", "https://app.swapcard.com/event/2022-game-devs-of-color-expo/person/RXZlbnRQZW9wbGVfMTU5NDMwNjc="],
    ["DUSKWITCH at Gradient Convergence 2022 on Steam", "https://store.steampowered.com/app/1624000/Duskwitch_Heroic_Soul/"],
  ]

  const scrshots = [
    "/img/test_img.jpeg",
    "/img/scr_shot2.png",
    "/img/scr_shot3.png",
    "/img/scr_shot5.png",
    "/img/scr_shot7.png",
  ]

  const gifs = [
    "/img/shotgunspikecombo_512px.gif",
    "/img/curve_shot_512px.gif",
  ]

  const mainBG = "/img/theganglogoless_sm.png";
  const logoImg = "/img/vividblue_logo.png";
  const dwLogoImg = "/img/duskwitch_logo.png";
  const dwColImg = "/img/gunpoint.png";
  const bioBanner = "/img/herographic.png"; 
  const founderImg = "/img/nateavatar.png"; 

  let showDropdown = false;
  function mobileMenu() {
    showDropdown = !showDropdown
  }
  let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos}/>

<div class="z-20 hidden md:block absolute text-white underline right-8 top-4">
  {#each menu as item}
  <span class="pl-6 text-xl"><h4 class="text-white inline-block underline"><a href="#{item[1]}">{item[0]}</a></h4></span>
  {/each}
</div>
<div on:click={mobileMenu} class={`z-20 block md:hidden text-white h-[48px] w-[48px] -right-1 fixed hover:cursor-pointer`}>
  <div class="border-2 w-[32px] rounded mt-2"></div>
  <div class="border-2 w-[32px] rounded mt-2"></div>
  <div class="border-2 w-[32px] rounded mt-2"></div>
</div>
<div
  class={`smooth-menu z-10 block md:hidden text-center w-full fixed overflow-hidden bg-cerulean text-white ${showDropdown ? "max-h-56" : "max-h-0"}`}>
  <div class="py-4"></div>
  {#each menu as item}
    <div on:click={mobileMenu} class="py-4 text-center"><h4 class="text-white"><a href="#{item[1]}">{item[0]}</a></h4></div>
  {/each}
</div>
<div class="w-full bg-aqua bg-top overflow-hidden">
  <div class="relative w-full h-full text-white flex flex-wrap justify-center items-center px-8 py-16 md:py-8 xl:py-4">
    <div class="absolute z-0 bg-aqua brightness-[95%] top-0 left-0 opacity-[85%] bg-cover bg-mainBG bg-top scale-[103%] blur-[2px] w-full h-full bg-banner-grad"></div>
    <div class="w-full text-8xl text-center">
      <img style="transform: translate(0,{-yPos * 0.2}px)" src={logoImg}/>
    </div>
  </div>
</div>
<div class="flex flex-wrap justify-center w-full bg-gradient-to-b from-aqua to-beige pb-8 px-8">
  <div class="w-[90%] h-full text-black flex flex-wrap">
    <h2 id="about" class="w-full py-8">ABOUT</h2>
    <div class="w-full text-md sm:text-xl"><p class="text-black">{@html studioAbout}</p></div>
    <h4 class="text-center pt-8 pb-4 w-full">THE LATEST</h4>
    <hr class= "w-full py-4">
    <div class="w-full bg-cerulean px-4 text-white text-xl">
      <ul>
        {#each theLatest as item}
          <li class="flex flex-wrap my-8 justify-center items-center">
            <div class="text-white w-[7%]"><div class="max-w-full mt-2">{@html bullet}</div></div>
            <div class="w-[93%] pl-4"><a class="underline text-white" href={item[1]}>{item[0]}</a></div>
          <li>
        {/each}
      </ul>
    </div>
  </div>
</div>
<div id="duskwitch" class="w-full bg-beige">
  <div class="relative w-full h-full text-black flex flex-wrap pb-8 justify-center">
    <div class="relative w-full">
      <img src={mainBG} class="w-full"/>
      <div class={`w-full absolute py-8 px-8 text-6xl top-[85%] sm:top-[80%]`}>
        <img style="transform: translate(0,{-yPos * 0.2}px)" src={dwLogoImg}/>
      </div>
    </div>
    <div class="flex flex-wrap py-8 px-8 w-full justify-center">
      <h4 class="text-center pt-4 pb-4 w-full uppercase">In which our witch moves at fever pitch</h4>
      <hr class= "py-4">
      <div class="w-[90%] lg:w-[50%] pr-0 md:pr-4">
        <div class="w-full text-md sm:text-xl pb-8"><p>{@html gameDesc}</p></div>
      </div>
      <div class="w-[90%] lg:w-[40%]">
        <img class="w-full" src={dwColImg}/>
      </div>
      <div class="w-[90%] lg:w-[50%] pt-8 lg:pt-0">
        <h3 class="uppercase pb-8">Features</h3>
        <div class="pb-8 md:pb-12 text-md sm:text-xl w-[95%]">
          <ul>
          {#each features as feature}
            <li class="list-disc pb-2 ml-10">{feature}</li>
          {/each}
          </ul>
        </div>
      </div>
      <div class="w-[90%] lg:w-[40%]">
        <div class="pb-4 flex flex-wrap">
          {#each socials as social}
            <div class="w-full md:w-1/2 pb-4 md:pb-8">
              <a href={social[1]} class="relative h-[48px]"> 
                <div class="inline-block w-[48px] h-[48px]">{@html social[2]}</div>
                <p class="inline-block pl-3 absolute -top-6 underline text-2xl">{social[0]}</p>
              </a>
            </div>
          {/each}
        </div>
        <h3 class="uppercase pb-4">Newsletter Signup</h3>
        <div class="pb-0 sm:pb-8">
          <!--Mailchimp signup-->
          <div id="mc_embed_signup bg">
            <form action="https://outlook.us14.list-manage.com/subscribe/post?u=de95535f3c1f0132d5b63129d&amp;id=933203f506&amp;f_id=00aef9e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                <div class="bg-black relative block sm:inline-block p-2">
                  <p><label for="mce-EMAI" class="text-white">Email Address  <span class="asterisk">*</span></label></p>
                  <input type="email" value="" name="EMAIL" class="required email max-w-[100%] sm:max-w-[75%] text-2xl px-1 h-[40px]" id="mce-EMAIL" required>
                  <input type="submit" class="cursor-pointer hover:bg-cerulean hover:text-white rounded-xl block sm:float-right px-3 ml-0 mt-2 sm:mt-0 h-[40px] bg-white uppercase" value="submit" id="mc-embedded-subscribe"/>
                </div>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    
            </form>
          </div>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
          <!--End mc_embed_signup-->
        </div>
      </div>
    </div>
    <div class="px-8">
      <h4 class="text-center pt-4 pb-4 w-full uppercase">Duskwitch In Action</h4>
      <hr class="py-4">
      <div class="w-full flex flex-wrap pb-0 md:pb-0 justify-center items-center">
        <div class="w-full md:w-1/2 p-0 pb-8 md:pr-4 md:pb-0"><img class="w-full" src={gifs[0]}/></div>
        <div class="w-full md:w-1/2 p-0 pb-0 md:pl-4"><img class="w-full" src={gifs[1]}/></div>
      </div>
      {#each scrshots as scrshot}
        <div class="w-full my-8"><img class="w-full" src={scrshot}/></div>
      {/each}
       <h3 class="pb-8 italic uppercase text-center text-xl md:text-2xl">Duskwitch is currently in development for pc</h3>
    </div>
    <div class="w-full">
      <img src={bioBanner} />
    </div>
  </div>
</div>
<div id="founder" class="w-full flex flex-wrap justify-center bg-beige px-8 pb-0">
  <div class="w-[90%] h-full text-black flex flex-wrap">
    <div class="w-full pb-4 uppercase">
      <h2>{studioName} Founder</h2>
    </div>
    <h3 class="pb-4 text-left text-black">{founderName}</h3>
    <div class="w-full text-md sm:text-xl pb-8">
      <img class="bio-mask float-right p-2 max-w-[50%] md:max-w-[33%]" src={founderImg}/><p>{@html founderBio}</p>
    </div>
    <hr class="w-full border-t-4 py-4">
  </div>
</div>
<div id="footer" class="flex flex-wrap justify-center py-8 px-8 bg-gradient-to-b from-beige to-aqua text-lg">
  <div class="w-[90%] flex flex-wrap justify-between">
    <p class="w-full sm:w-auto">&#169; 2022 {studioName}</p>
    <p class="w-full sm:w-auto"><a class="underline" href="/privacy">Privacy Policy</a></p>
    <p class="w-full sm:w-auto">Site made by <a class="underline" href="https://www.gammaspace.ca">Gamma Space</a></p>
  </div>
</div>