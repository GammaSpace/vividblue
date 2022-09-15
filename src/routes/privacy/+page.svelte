<script>
  const logoImg = "/img/vividblue_logo.png";

  let yPos = 0;


</script>

<svelte:window bind:scrollY={yPos}/>

<div class="w-full bg-top overflow-hidden">
  <div class="relative w-full h-full text-white flex flex-wrap justify-center items-center px-8 py-16 md:py-8 xl:py-4">
    <div class="absolute -z-10 bg-black brightness-[95%] top-0 left-0 opacity-[85%] bg-cover bg-mainBG bg-top scale-[103%] blur-[2.5px] w-full h-full"></div>
    <div class="w-full text-8xl text-center">
      <img style="transform: translate(0,{-yPos * 0.2}px)" src={logoImg}/>
    </div>
  </div>
</div>
<div class="flex flex-wrap justify-center w-full bg-gradient-to-b from-aqua to-beige pb-8 px-8">
  <div class="w-[90%] h-full text-black flex flex-wrap">
    <h2 id="about" class="w-full py-8 uppercase">Privacy Policy</h2>
    <div class="w-full text-md sm:text-xl">
        <p class="mb-8">This privacy policy has been compiled to better serve those who are concerned with how their &#39;Personally Identifiable Information&#39; (PII) is being used by VIVID BLUE LTD (“VIVID BLUE”, “We”, “Us”).&nbsp;</p>

        <p class="mb-8">PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.&nbsp;</p>

        <p class="mb-8">Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

        <h2 class="mb-8">What personal information do we collect from the people that visit our blog, website or app?</h2>

        <p class="mb-8">When ordering or registering on our site, as appropriate, you may be asked to enter your email address or other details to help you with your experience.</p>

        <h2 class="mb-8">When do we collect information?</h2>

        <p class="mb-8">We collect information from you when you place an order, subscribe to a newsletter, fill out a form or enter information on our site.</p>

        <p class="mb-8">We also collect and analyze data from your interactions with our applications, including (describe when it’s collected)</p>

        <h2 class="mb-8">How do we use your information?</h2>

        <p class="mb-8">We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>

        <ul class="mb-8">
          <li class="ml-8 mb-2 list-disc">To allow us to better service you in responding to your customer service requests.</li>
          <li class="ml-8 mb-2 list-disc">To administer a contest, promotion, survey or other site feature.</li>
          <li class="ml-8 mb-2 list-disc">To send periodic emails regarding your order or other products and services.</li>
          <li class="ml-8 mb-2 list-disc">To follow up with them after correspondence (live chat, email or phone inquiries).</li>
        </ul>

        <p class="mb-8">We may use the information we collect from your sessions with our application in the following ways:</p>

        <ul class="mb-8">
          <li class="ml-8 mb-2 list-disc">To allow us improve our application’s usability.</li>
          <li class="ml-8 mb-2 list-disc">To help determine which features are most commonly used in order to prioritize improvements. </li>
        </ul>

        <h2 class="mb-8">How do we protect your information?</h2>

        <p class="mb-8">We do not use vulnerability scanning and/or scanning to PCI standards. An external PCI compliant payment gateway handles all CC transactions and mailing list signups. We use regular Malware Scanning.</p>

        <p class="mb-8">We do not use an SSL certificate. We only provide articles and information. We never ask for personal or private information like names or credit card numbers.</p>

        <h2 class="mb-8">Do we use &#39;cookies&#39;?</h2>

        <p class="mb-8">Yes. Cookies are small files that a site or its service provider transfers to your computer&#39;s hard drive through your Web browser (if you allow) that enables the site&#39;s or service provider&#39;s systems to recognize your browser and capture and remember certain information.&nbsp;</p>

        <p class="mb-8">They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services.&nbsp;</p>

        <p class="mb-8">We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

        <p class="mb-8">We use cookies to compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.&nbsp;</p>

        <p class="mb-8">We may also use trusted third-party services that track this information on our behalf.</p>

        <p class="mb-8">You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser&#39;s Help Menu to learn the correct way to modify your cookies.</p>

        <p class="mb-8">If you turn cookies off, It won&#39;t affect your user experience with this site or any associated application.</p>

        <h2 class="mb-8">Third-party disclosure</h2>

        <p class="mb-8">We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it&#39;s release is appropriate to comply with the law, enforce our site policies, or protect ours or others&#39; rights, property or safety.</p>

        <p class="mb-8">However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

        <h2 class="mb-8">Third-party links</h2>

        <p class="mb-8">Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

        <h2 class="mb-8">Google</h2>

        <p class="mb-8">Google&#39;s advertising requirements can be summed up by Google&#39;s Advertising Principles. They are put in place to provide a positive experience for users. <a class="cursor-pointer underline" href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a></p>

        <h3 class="mb-8">We have implemented the following:</h3>

        <p class="mb-8">We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>

        <h2 class="mb-8">Opting out</h2>

        <p class="mb-8">Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</p>

        <h2 class="mb-8">California Online Privacy Protection Act</h2>

        <p class="mb-8">CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law&#39;s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: <a class="underline cursor-pointer" href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a>

        <h3 class="mb-8">According to CalOPPA, we agree to the following:</h3>

        <ul class="mb-8">
          <li class="ml-8 mb-2 list-disc">Users can visit our site anonymously.Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</li>
          <li class="ml-8 mb-2 list-disc">Our Privacy Policy link includes the word &#39;Privacy&#39; and can easily be found on the page specified above.</li>
          <li class="ml-8 mb-2 list-disc">You will be notified of any Privacy Policy changes on our Privacy Policy Page. You can change your personal information by emailing us at privacy@vividblue.net</li>
        </ul>

        <h2 class="mb-8">How does our site handle Do Not Track signals?</h2>

        <p class="mb-8">We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>

        <h2 class="mb-8">Does our site allow third-party behavioural tracking?</h2>

        <p class="mb-8">It&#39;s also important to note that we allow third-party behavioural tracking</p>

        <h2 class="mb-8">COPPA (Children Online Privacy Protection Act)</h2>

        <p class="mb-8">When it comes to the collection of personal information from children under the age of 13 years old, the Children&#39;s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States&#39; consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children&#39;s privacy and safety online.</p>

        <p class="mb-8"><strong>We do not specifically market to children under the age of 13 years old</strong>.</p>

        <h2 class="mb-8">CAN SPAM Act</h2>

        <p class="mb-8">The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>

        <p class="mb-8">We collect your email address in order to:</p>

        <ul class="mb-8">
          <li class="ml-8 mb-2 list-disc">Send information, respond to inquiries, and/or other requests or questions</li>
          <li class="ml-8 mb-2 list-disc">Process orders and to send information and updates pertaining to orders.</li>
          <li class="ml-8 mb-2 list-disc">Send you additional information related to your product and/or service.</li>
          <li class="ml-8 mb-2 list-disc">Market to our mailing list or continue to send emails to our clients after the original transaction has occurred. </li>
        </ul>

        <h3 class="mb-8">To be in accordance with CANSPAM, we agree to the following:</h3>

        <ul class="mb-8">
          <li class="ml-8 mb-2 list-disc">Not use false or misleading subjects or email addresses.</li>
          <li class="ml-8 mb-2 list-disc">Identify the message as an advertisement in some reasonable way.</li>
          <li class="ml-8 mb-2 list-disc">Include the physical address of our business or site headquarters.</li>
          <li class="ml-8 mb-2 list-disc">Monitor third-party email marketing services for compliance, if one is used.</li>
          <li class="ml-8 mb-2 list-disc">Honor opt-out/unsubscribe requests quickly.</li>
          <li class="ml-8 mb-2 list-disc">Allow users to unsubscribe by using the link at the bottom of each email. </li>
        </ul>

        <p class="mb-8">If at any time you would like to unsubscribe from receiving future emails, you can email us at privacy@vividblue.net and we will promptly remove you from <strong>ALL</strong> correspondence.</p>

        <h2 class="mb-8">Contacting Us</h2>

        <p class="mb-8"><strong>If there are any questions regarding this privacy policy, you may contact us using the</strong> information below.<br/>

        <p class="mb-8">Address and email forthcoming.</p>

        <p class="mb-8"><a class="underline" href="/">Back Home</a></p>
    </div>
  </div>
</div>