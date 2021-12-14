<script>
    import logo from '../images/logo.svg'
    import computer from '../images/image-computer.png'
    import devices from '../images/image-devices.png'
    import blacklist from '../images/icon-blacklist.svg'
    import text from '../images/icon-text.svg'
    import preview from '../images/icon-preview.svg'
    import google from '../images/logo-google.png'
    import hp from '../images/logo-hp.png'
    import microsoft from '../images/logo-microsoft.png'
    import ibm from '../images/logo-ibm.png'
    import vectorgraphics from '../images/logo-vector-graphics.png'
    import facebook from '../images/icon-facebook.svg'
    import instagram from '../images/icon-instagram.svg'
    import twitter from '../images/icon-twitter.svg'
   
</script>
<div class="font-BaiJamjuree">
  <!-- hero -->
  <div class="bg-hero-desktop bg-cover w-full">
      <div class="container flex flex-col items-center py-[80px] md:py-[128px] text-center">
            <img  class="w-[125px] mb-14" src="{logo}" alt="logo">
            <h1 class="text-4xl md:text-5xl mb-3 text-dark-gray-blue"> A history of everything you copy</h1>

            <p class="max-w-[500px] md:max-w-[700px] text-[14px] md:text-[18px] mb-16 text-grey-blue selection:bg-strong-cyan selection:text-white">
                Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
                <button class="btn btn-cyan"> Download for iOS</button>

                <button class="btn   btn-light-blue"> Download for Mac</button>

            </div>

            
      </div>

  </div>

  <!-- features -->
  <div class="py-[80px] md:py-[128px] container max-w-screen-lg">
    <h1 class="text-3xl text-center md:text-4xl mb-3 text-dark-gray-blue"> 
        Keep track of your snippets
    </h1>
    <p class="max-w-[500px] md:max-w-[700px] mb-16 text-grey-blue text-center       mx-auto text-[14px] md:text-[18px]">
        Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything.
    </p>
    <div class="flex flex-col items-center gap-10 lg:items-start lg:gap-20 lg:flex-row">
        <div class="flex-1 ">
            <img src={computer} alt="computer">
        </div>
        <div class="flex flex-col mt-8 max-w-[350px]">
            <div class="mb-14">
                <h3 class="text-dark-gray-blue text-xl sm:text-2xl mb-3">
                    Quick Search
                </h3>
                <p class="text-[14px] sm:text-base text-grey-blue leading-7">
                    Easily search your snippets by content, category, web address, application, and more.
                </p>
            </div>
            <div class="mb-14">
                <h3 class="text-dark-gray-blue text-xl sm:text-2xl mb-3">
                    iCloud Sync
                </h3>
                <p class="text-[14px] sm:text-base text-grey-blue leading-7">
                    Instantly saves and syncs snippets across all your devices.
                </p>
            </div>
            <div >
                <h3 class="text-dark-gray-blue text-xl sm:text-2xl mb-3">
                    Complete History
                </h3>
                <p class="text-[14px] sm:text-base text-grey-blue leading-7">
                    Retrieve any snippets from the first moment you started using the app.
                </p>
            </div>
            
        </div>
    </div>

  </div>

  <!-- access -->

  <div class="py-[80px] md:py-[128px] max-w-screen-lg container flex flex-col items-center">
    <h1 class="text-3xl text-center md:text-4xl mb-3 text-dark-gray-blue"> 
        Access Clipboard anywhere
    </h1>
    <p class="max-w-[500px] md:max-w-[700px] mb-16 text-grey-blue text-center       mx-auto text-[14px] md:text-[18px]">
        Whether you’re on the go, or at your computer, you can access all your Clipboard 
                    snippets in a few simple clicks.
    </p>
    <img src="{devices}" alt="" class="">

  </div>


  <!-- supercharge -->
  <div class="py-[80px] md:py-[128px]  container flex flex-col items-center">
    <h1 class="text-3xl text-center md:text-4xl mb-3 text-dark-gray-blue"> 
        Supercharge your workflow
    </h1>
    <p class="max-w-[500px] md:max-w-[700px] mb-16 text-grey-blue text-center       mx-auto text-[14px] md:text-[18px]">
        We’ve got the tools to boost your productivity.
    </p>

    <div class="flex flex-col md:flex-row gap-12">
        <div class="flex flex-col flex-1 items-center">
            <img class="w-[44px] mb-6" src="{blacklist}" alt="blacklist" >
            <h3 class="text-lg md:text-xl text-dark-gray-blue mb-3"> Create blacklists</h3>
            <p class="text-sm md:text-base text-grey-blue text-center mx-w-[350px]">
                Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
            </p>
        </div>

        <div class="flex flex-col flex-1 items-center">
            <img class="w-[44px] mb-6" src="{text}" alt="text" >
            <h3 class="text-lg md:text-xl text-dark-gray-blue mb-3"> Plain text snippets</h3>
            <p class="text-sm md:text-base text-grey-blue text-center mx-w-[350px]">
                Remove unwanted formatting from copied text for a consistent look.
            </p>
        </div>

        <div class="flex flex-col flex-1 items-center">
            <img class="w-[44px] mb-6" src="{preview}" alt="preview" >
            <h3 class="text-lg md:text-xl text-dark-gray-blue mb-3"> Sneak preview</h3>
            <p class="text-sm md:text-base text-grey-blue text-center mx-w-[350px]">
                Quick preview of all snippets on your Clipboard for easy access.
            </p>
        </div>

    </div>
  </div>



  <!-- clients -->
  <div class="py-[80px] md:py-[128px] flex gap-20 flex-col sm:flex-row sm:flex-wrap items-center justify-center container">
        <img src="{google}" alt="google">
        <img src="{ibm}" alt="ibm">
        <img src="{microsoft}" alt="microsoft">
        <img src="{hp}" alt="hp">
        <img src="{vectorgraphics}" alt="vector graphics">

  </div>

  <!-- cta -->
  <div class="py-[80px] md:py-[128px] container flex flex-col items-center text-center">

        <h1 class="text-3xl text-center md:text-4xl mb-3 text-dark-gray-blue"> 
            Clipboard for iOS and Mac OS
        </h1>
        <p class="max-w-[500px] md:max-w-[700px] mb-16 text-grey-blue text-center       mx-auto text-[14px] md:text-[18px]">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
    and you’re ready to start adding to your clipboard
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-cyan"> Download for iOS</button>

            <button class="btn   btn-light-blue"> Download for Mac</button>

        </div>
  </div>
  <!-- footer -->

  <footer class="bg-gray-100 py-10 px-12 ">
      <div class="container gap-x-24 gap-y-12 flex flex-col md:flex-row items-center">
        <div>
            <img src="{logo}" alt="logo" class="w-[55px]">
        </div>
           <ul class="flex flex-1 flex-wrap gap-x-12 gap-y-2 justify-center md:justify-start text-dark-gray-blue">
               <li class="cursor-pointer">  FAQs</li>
               <li class="cursor-pointer">  Contact Us</li>
               <li class="cursor-pointer">Privacy Policy</li>
               <li class="cursor-pointer">  Press Kit</li>
               <li class="cursor-pointer"> Install Guide</li>
           </ul> 
           <ul class="flex flex-wrap  justify-end items-center gap-x-4">
               <li class="cursor-pointer"><img src="{facebook}" alt="facebook"></li>
               <li class="cursor-pointer"><img src="{instagram}" alt="instagram"></li>
               <li class="cursor-pointer"><img src="{twitter}" alt="twitter"></li>
           </ul>
      </div>
  </footer>

</div>