<template>
  <q-layout view="lHh tre lFf">
    <q-header elevated>
      <q-toolbar>
        
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
<div class="q-pa-md q-gutter-sm">
    <q-btn label="REGISTRASI" color="primary" @click="layout = true" />
    <q-tooltip content-class="" :offset="[10, 10]">
          Silahkan menjadi member kami!
        </q-tooltip>
    <q-dialog v-model="layout">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Pendaftaran</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>
            


              <template>
  <div class="row">
    <div id="form" class="q-mx-auto" style="max-width: 500px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      > 
        <q-input
          filled
          v-model="username"
          label="Username*"
          lazy-rules
          :rules="[
           val => val !== null && val !== '' || '',
           ]"
        />

        <q-input
          filled
          type="jeniskelamin"
          v-model="jeniskelamin"
          label="Jenis Kelamin "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || '',
          ]"
        />

         <q-input
          filled
          type="email"
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || '',
          ]"
        />


 <q-input
          filled
          type="password"
          v-model="password"
          label="Password "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Kata Sandi',
          ]"
        />


        <div>
          <q-btn label="DAFTAR" type="submit" color="primary" flat class="q-ml-sm"/>
          
        </div>
      </q-form>
    </div>
  </div>
</template>



          
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
  
           
    </div>
  </div>
 <div class="q-pa-md">
    <div class="q-gutter-md row">
<div class="q-pa-md q-gutter-sm">
    <q-btn label="DZIKIR PAGI" color="primary" @click="layout1 = true" />
     <q-tooltip content-class="" :offset="[10, 10]">
          Bacaan dzikir diwaktu pagi
        </q-tooltip>
    <q-dialog v-model="layout1">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Dzikir Pagi</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>

<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<span id="Dzikir_yang_Dibaca_di_Waktu_Pagi" style="box-sizing: border-box;"><span style="box-sizing: border-box; font-size: 18pt;"><strong style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">Dzikir yang Dibaca di Waktu Pagi</span></strong></span></span></h2>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
(Antara Shubuh hingga siang hari ketika matahari akan bergeser ke barat)</div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.”</div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="1" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[1]</span></span></h3>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
Membaca&nbsp;<a href="https://rumaysho.com/11661-3-waktu-utama-membaca-ayat-kursi.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">ayat Kursi</a></div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“<em style="box-sizing: border-box;">Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.</em>” (<a href="https://tafsirweb.com/1021-surat-al-baqarah-ayat-255.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">QS. Al Baqarah: 255</a>)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:</strong>&nbsp;Siapa yang membacanya ketika petang, maka ia akan dilindungi (oleh Allah dari berbagai gangguan) hingga pagi. Siapa yang membacanya ketika pagi, maka ia akan dilindungi hingga petang.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn1" name="_ftnref1" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[1]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="2" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[2]</span></span></h3>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
Membaca surat Al Ikhlas, Al Falaq, An Naas</div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah,&nbsp;<a href="https://rumaysho.com/18686-syarhus-sunnah-allah-itu-al-wahid.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">Yang Maha Esa</a>. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.”&nbsp;</em>(QS. Al Ikhlas: 1-4)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ&nbsp; وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki”.&nbsp;</em>(QS. Al Falaq: 1-5)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia.”</em>&nbsp;(QS. An Naas: 1-6)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Siapa yang mengucapkannya masing-masing tiga kali ketika pagi dan petang, maka segala sesuatu akan dicukupkan untuknya.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn2" name="_ftnref2" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[2]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="3" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[3]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Ash-bahnaa wa ash-bahal mulku lillah walhamdulillah, laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodir. Robbi as-aluka khoiro maa fii hadzal yaum wa khoiro maa ba’dahu, wa a’udzu bika min syarri maa fii hadzal yaum wa syarri maa ba’dahu. Robbi a’udzu bika minal kasali wa su-il kibar. Robbi a’udzu bika min ‘adzabin fin naari wa ‘adzabin fil qobri.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;"><strong style="box-sizing: border-box;">Artinya:</strong></span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Wahai Rabbku, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepada-Mu dari&nbsp;<a href="https://rumaysho.com/21000-doa-agar-tidak-malas-disucikan-jiwa-diberi-hati-yang-khusyuk.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">kemalasan</a>&nbsp;dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di alam kubur.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah</strong>: Meminta pada Allah kebaikan di hari ini dan kebaikan sesudahnya, juga agar terhindar dari kejelekan di hari ini dan kejelekan sesudahnya. Di dalamnya berisi pula permintaan agar terhindar dari rasa malas padahal mampu untuk beramal, juga agar terhindar dari kejelekan di masa tua. Di dalamnya juga berisi permintaan agar terselamatkan dari siksa kubur dan siksa neraka yang merupakan siksa terberat di hari kiamat kelak.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn3" name="_ftnref3" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[3]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="4" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[4]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma bika ash-bahnaa wa bika amsaynaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuur.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu petang. Dengan rahmat dan pertolongan-Mu kami hidup dan dengan kehendak-Mu kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn4" name="_ftnref4" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[4]</strong></a></strong></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="5" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[5]</span></span></h3>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
Membaca&nbsp;<a href="https://rumaysho.com/20898-kumpulan-amalan-ringan-26-bacaan-sayyidul-istighfar.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><em style="box-sizing: border-box;">Sayyidul Istighfar</em></a></div>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma anta robbii laa ilaha illa anta, kholaqtanii wa anaa ‘abduka wa anaa ‘ala ‘ahdika wa wa’dika mas-tatho’tu. A’udzu bika min syarri maa shona’tu. Abu-u laka bi ni’matika ‘alayya wa abu-u bi dzambii. Fagh-firlii fainnahu laa yagh-firudz dzunuuba illa anta.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku). Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku. Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa mengucapkan dzikir ini di siang hari dalam keadaan penuh keyakinan, lalu ia mati pada hari tersebut sebelum petang hari, maka ia termasuk&nbsp;<a href="https://rumaysho.com/1689-4-sifat-penghuni-surga.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">penghuni surga</a>. Barangsiapa yang mengucapkannya di malam hari dalam keadaan penuh keyakinan, lalu ia mati sebelum pagi, maka ia termasuk penghuni surga.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn5" name="_ftnref5" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[5]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="6" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[6]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ إِنِّيْ أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma inni ash-bahtu usy-hiduka wa usy-hidu hamalata ‘arsyika wa malaa-ikatak wa jami’a kholqik, annaka antallahu laa ilaha illa anta wahdaka laa syariika lak, wa anna Muhammadan ‘abduka wa rosuuluk.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, sesungguhnya aku di waktu pagi ini mempersaksikan Engkau, malaikat yang memikul ‘Arys-Mu, malaikat-malaikat dan seluruh makhluk-Mu, bahwa sesungguhnya Engkau adalah Allah, tiada ilah yang berhak disembah kecuali Engkau semata, tiada sekutu bagi-Mu dan sesungguhnya Muhammad adalah hamba dan utusan-Mu.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 4 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah</strong>: Barangsiapa yang mengucapkan dzikir ini ketika pagi dan petang hari sebanyak empat kali, maka Allah akan membebaskan dirinya dari siksa neraka.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn6" name="_ftnref6" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[6]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="7" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[7]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma innii as-alukal ‘afwa wal ‘aafiyah fid dunyaa wal aakhiroh. Allahumma innii as-alukal ‘afwa wal ‘aafiyah fii diinii wa dun-yaya wa ahlii wa maalii. Allahumas-tur ‘awrootii wa aamin row’aatii. Allahummahfazh-nii mim bayni yadayya wa min kholfii wa ‘an yamiinii wa ‘an syimaalii wa min fawqii wa a’udzu bi ‘azhomatik an ughtala min tahtii.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan di dunia dan akhirat. Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan dalam agama, dunia, keluarga dan hartaku. Ya Allah, tutupilah auratku (aib dan sesuatu yang tidak layak dilihat orang) dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari muka, belakang, kanan, kiri dan atasku. Aku berlindung dengan kebesaran-Mu, agar aku tidak disambar dari bawahku (oleh ular atau tenggelam dalam bumi dan lain-lain yang membuat aku jatuh).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Rasulullah&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>&nbsp;tidaklah pernah meninggalkan do’a ini di pagi dan petang hari. Di dalamnya berisi perlindungan dan keselamatan pada agama, dunia, keluarga dan harta dari berbagai macam gangguan yang datang dari berbagai arah.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn7" name="_ftnref7" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[7]</a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="8" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[8]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا&nbsp;<strong style="box-sizing: border-box;">أَوْ أَجُرَّهُ</strong>&nbsp;إِلَى مُسْلِمٍ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma ‘aalimal ghoybi wasy syahaadah faathiros samaawaati wal ardh. Robba kulli syai-in wa maliikah. Asyhadu alla ilaha illa anta. A’udzu bika min syarri nafsii wa min syarrisy syaythooni wa syirkihi, wa an aqtarifa ‘alaa nafsii suu-an&nbsp;<strong style="box-sizing: border-box;">aw ajurrohu</strong>&nbsp;ilaa muslim.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, Yang Maha Mengetahui yang ghaib dan yang nyata, wahai Rabb pencipta langit dan bumi, Rabb segala sesuatu dan yang merajainya. Aku bersaksi bahwa tidak ada ilah yang berhak disembah kecuali Engkau. Aku berlindung kepadaMu dari kejahatan diriku, setan dan balatentaranya (godaan untuk berbuat syirik pada Allah), dan aku (berlindung kepada-Mu) dari berbuat kejelekan terhadap diriku atau menyeretnya kepada seorang muslim.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Do’a ini diajarkan oleh Rasulullah&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>&nbsp;pada&nbsp;<a href="https://rumaysho.com/994-doa-minta-ampunan-versi-abu-bakr.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">Abu Bakr Ash Shiddiq</a>&nbsp;<em style="box-sizing: border-box;">radhiyallahu ‘anhu</em>&nbsp;untuk dibaca pada pagi, petang dan saat beranjak tidur.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn8" name="_ftnref8" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[8]</a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="9" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[9]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Bismillahilladzi laa yadhurru ma’asmihi syai-un fil ardhi wa laa fis samaa’ wa huwas samii’ul ‘aliim.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan langit tidak akan berbahaya, Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah</strong>: Barangsiapa yang mengucapkan dzikir tersebut sebanyak tiga kali di pagi hari dan tiga kali di petang hari, maka tidak akan ada bahaya yang tiba-tiba memudaratkannya.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn9" name="_ftnref9" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[9]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="10" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[10]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Rodhiitu billaahi robbaa wa bil-islaami diinaa, wa bi-muhammadin shallallaahu ‘alaihi wa sallama nabiyya.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Aku ridha Allah sebagai Rabb, Islam sebagai agama dan Muhammad&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam&nbsp;</em>sebagai nabi.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang mengucapkan dzikir ini sebanyak tiga kali di pagi hari dan tiga kali di petang hari, maka pantas baginya mendapatkan ridha Allah.<strong style="box-sizing: border-box;">&nbsp;<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn10" name="_ftnref10" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[10]</strong></a></strong></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="11" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[11]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Yaa Hayyu Yaa Qoyyum, bi-rohmatika as-taghiits, wa ash-lih lii sya’nii kullahu wa laa takilnii ilaa nafsii thorfata ‘ainin Abadan.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri (tidak butuh segala sesuatu), dengan rahmat-Mu aku minta pertolongan, perbaikilah segala urusanku dan jangan diserahkan kepadaku sekali pun sekejap mata (tanpa mendapat pertolongan dariMu).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Dzikir ini diajarkan oleh Nabi&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam&nbsp;</em>pada Fathimah supaya diamalkan pagi dan petang.<strong style="box-sizing: border-box;">&nbsp;<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn11" name="_ftnref11" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[11]</strong></a></strong></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="12" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[12]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ، حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Ash-bahnaa ‘ala fithrotil islaam wa ‘alaa kalimatil ikhlaash, wa ‘alaa diini nabiyyinaa Muhammadin shallallahu ‘alaihi wa sallam, wa ‘alaa millati abiina Ibraahiima haniifam muslimaaw wa maa kaana minal musyrikin</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Di waktu pagi kami memegang agama Islam, kalimat ikhlas (kalimat syahadat), agama Nabi kami Muhammad&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>, dan agama bapak kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x di pagi hari saja)<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn12" name="_ftnref12" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[12]</strong></a></strong></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="13" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[13]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
سُبْحَانَ اللهِ وَبِحَمْدِهِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Subhanallah wa bi-hamdih.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Maha suci Allah, aku memuji-Nya.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 100 x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang mengucapkan kalimat ‘<em style="box-sizing: border-box;">subhanallah wa bi hamdih</em>’ di pagi dan petang hari sebanyak 100 x, maka tidak ada yang datang pada&nbsp;<a href="https://rumaysho.com/19181-doa-sebelum-tidur-berisi-permintaan-selamat-dari-siksa-pada-hari-kiamat.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">hari kiamat</a>&nbsp;yang lebih baik dari yang ia lakukan kecuali orang yang mengucapkan semisal atau lebih dari itu.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn13" name="_ftnref13" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[13]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="14" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[14]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodiir.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Tidak ada ilah yang berhak disembah selain Allah semata, tidak ada sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu<strong style="box-sizing: border-box;">.” (Dibaca 1o x)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang membaca dzikir tersebut di pagi hari sebanyak sepuluh kali, Allah akan mencatatkan baginya 10 kebaikan, menghapuskan baginya 10 kesalahan, ia juga mendapatkan kebaikan semisal memerdekakan 10 budak, Allah akan melindunginya dari gangguan setan hingg petang hari. Siapa yang mengucapkannya di petang hari, ia akan mendapatkan keutamaan semisal itu pula.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn14" name="_ftnref14" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[14]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="15" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[15]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodiir.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Tidak ada ilah yang berhak disembah selain Allah semata, tidak ada sekutu bagi-Nya. Milik Allah kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 100 x dalam sehari)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah</strong>: Barangsiapa yang mengucapkan dzikir tersebut dalam sehari sebanyak 100 x, maka itu seperti membebaskan 10 orang budak, dicatat baginya 100 kebaikan, dihapus baginya 100 kesalahan, dirinya akan terjaga dari gangguan setan dari pagi hingga petang hari, dan tidak ada seorang pun yang lebih baik dari yang ia lakukan kecuali oleh orang yang mengamalkan lebih dari itu.<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn15" name="_ftnref15" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[15]</strong></a><strong style="box-sizing: border-box;">&nbsp;&nbsp;</strong></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="16" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[16]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Subhanallah wa bi-hamdih, ‘adada kholqih wa ridhoo nafsih. wa zinata ‘arsyih, wa midaada kalimaatih.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Maha Suci Allah, aku memujiNya sebanyak makhluk-Nya, sejauh kerelaan-Nya, seberat timbangan ‘Arsy-Nya dan sebanyak tinta tulisan kalimat-Nya.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x di waktu pagi saja)</strong></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Nabi&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>&nbsp;mengatakan pada Juwairiyah bahwa dzikir di atas telah mengalahkan dzikir yang dibaca oleh Juwairiyah dari selepas Shubuh sampai&nbsp;<a href="https://rumaysho.com/9488-waktu-shalat-dhuha.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">waktu Dhuha</a>.&nbsp;<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn16" name="_ftnref16" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[16]</strong></a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="17" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[17]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Allahumma innii as-aluka ‘ilman naafi’a, wa rizqon thoyyibaa, wa ‘amalan mutaqobbalaa.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat (bagi diriku dan orang lain), rizki yang halal dan amal yang diterima (di sisi-Mu dan mendapatkan ganjaran yang baik).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x setelah salam dari shalat Shubuh)</strong><a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn17" name="_ftnref17" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[17]</a></div>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="18" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[18]</span></span></h3>
<div dir="RTL" style="box-sizing: border-box; color: #222222; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: center;">
<em style="box-sizing: border-box;">Astagh-firullah wa atuubu ilaih.</em></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
“Aku memohon ampun kepada Allah dan bertobat kepada-Nya.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 100 x dalam sehari)</strong><a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftn18" name="_ftnref18" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[18]</a></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<br /></div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<span style="box-sizing: border-box; font-size: 12pt;"><strong style="box-sizing: border-box;">Baca Juga:</strong></span></div>
<ul style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; list-style-position: inside; padding: 0px;">
<li style="box-sizing: border-box; line-height: 24px;"><a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red; font-size: 12pt;">Bacaan Dzikir Petang</span></strong></a></li>
<li style="box-sizing: border-box; line-height: 24px;"><span style="box-sizing: border-box; font-size: 12pt;"><strong style="box-sizing: border-box;"><a href="https://rumaysho.com/2288-kapan-waktu-dzikir-pagi-dan-petang.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><span style="box-sizing: border-box; color: red;">Kapan Waktu Dzikir Pagi dan Petang?</span></a></strong></span></li>
<li style="box-sizing: border-box; line-height: 24px;"><a href="https://rumaysho.com/748-malas-beraktivitas-disebabkan-melupakan-dzikirnpagi.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red; font-size: 12pt;">Malas Beraktivitas Disebabkan Melupakan Dzikir Pagi</span></strong></a></li>
</ul>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref1" name="_ftn1" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[1]</a>&nbsp;HR. Al Hakim (1: 562). Syaikh Al Albani menshahihkan hadits tersebut dalam Shahih At Targhib wa At Tarhib no. 655.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref2" name="_ftn2" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[2]</a>&nbsp;HR. Abu Daud no. 5082, Tirmidzi no. 3575. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini hasan.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref3" name="_ftn3" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[3]</a>&nbsp;HR. Muslim no. 2723. Lihat keterangan Syarh Hisnul Muslim, hal. 161.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref4" name="_ftn4" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[4]</a>&nbsp;HR. Tirmidzi no. 3391 dan Abu Daud no. 5068. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini&nbsp;<em style="box-sizing: border-box;">shahih</em>.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref5" name="_ftn5" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[5]</a>&nbsp;HR. Bukhari no. 6306.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref6" name="_ftn6" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[6]</a>&nbsp;HR. Abu Daud no. 5069. Al Hafizh Abu Thohir mengatakan bahwa hadits ini hasan.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref7" name="_ftn7" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[7]</a>&nbsp;HR. Abu Daud no. 5074 dan Ibnu Majah no. 3871. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini shahih.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref8" name="_ftn8" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[8]</a>&nbsp;HR. Tirmidzi no. 3392 dan Abu Daud no. 5067. Al Hafizh Abu Thohir mengatakan bahawa sanad hadits ini shahih. Adapun kalimat terakhir (وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرُّهُ إِلَى مُسْلِمٍ) adalah tambahan dari riwayat Ahmad 2: 196. Dikomentari oleh Syaikh Syu’aib Al Arnauth bahwa hadits tersebut shahih dilihat dari jalur lainnya (shahih lighoirihi).</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref9" name="_ftn9" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[9]</a>&nbsp;HR. Abu Daud no. 5088, 5089, Tirmidzi no. 3388, dan Ibnu Majah no. 3869. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini hasan.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref10" name="_ftn10" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[10]</a>&nbsp;HR. Abu Daud no. 5072, Tirmidzi no. 3389. Al Hafizh Abu Thohir mengatakan bahwa hadits ini hasan.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref11" name="_ftn11" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[11]</a>&nbsp;HR. Ibnu As Sunni dalam ‘Amalul Yaum wal Lailah no. 46, An Nasai dalam Al Kubro (381/ 570), Al Bazzar dalam musnadnya (4/ 25/ 3107), Al Hakim (1: 545). Sanad hadits ini hasan sebagaimana dikatakan oleh Syaikh Al Albani dalam As Silsilah Ash Shahihah no. 227.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref12" name="_ftn12" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[12]</a>&nbsp;HR. Ahmad (3: 406). Syaikh Syu’aib Al Arnauth mengatakan bahwa sanad hadits ini shahih sesuai syarat Bukhari Muslim. Lihat pula As Silsilah Ash Shahihah no. 2989.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
Catatan: Dzikir ini hanya dibaca di pagi hari. Riwayat yang menyatakan dibaca juga saat petang hari adalah riwayat yang lemah. Sebagaimana dinyatakan oleh guru penulis, Syaikh ‘Abdul ‘Aziz Ath Thorifi dalam Adzkar Ash Shobaah wal Masaa’, hal. 65.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref13" name="_ftn13" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[13]</a>&nbsp;HR. Muslim no. 2692.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref14" name="_ftn14" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[14]</a>&nbsp;HR. An Nasai Al Kubra 6: 10.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref15" name="_ftn15" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[15]</a>&nbsp;HR. Bukhari no. 3293 dan Muslim no. 2691.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref16" name="_ftn16" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[16]</a>&nbsp;HR. Muslim no. 2726.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref17" name="_ftn17" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[17]</a>&nbsp;HR. Ibnu Majah no. 925 dan Ahmad 6: 305, 322. Al Hafizh Abu Thohir mengatakan bahwa hadits ini shahih.</div>
<div style="box-sizing: border-box; color: #222222; font-family: Verdana, Geneva, sans-serif; font-size: 13px; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html#_ftnref18" name="_ftn18" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[18]</a>&nbsp;HR. Bukhari no. 6307 dan Muslim no. 2702.</div>

            
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
   </div>
  </div>
  
<div class="q-pa-md">
    <div class="q-gutter-md row">
<div class="q-pa-md q-gutter-sm">
    <q-btn label="DZIKIR PETANG" color="primary" @click="layout2 = true" />
     <q-tooltip content-class="" :offset="[10, 10]">
          Bacaan dzikir diwaktu petang
        </q-tooltip>
    <q-dialog v-model="layout2">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Dzikir Petang</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>

<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<span id="Dzikir_yang_Dibaca_di_Waktu_Petang" style="box-sizing: border-box;"><strong style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red; font-size: 18pt;">Dzikir yang Dibaca di Waktu Petang</span></strong></span></h2>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
(Dari tenggelam matahari atau waktu Maghrib hingga pertengahan malam)</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<br /></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.”</div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="1" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[1]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
Membaca ayat Kursi</div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“<em style="box-sizing: border-box;">Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.</em>” (QS. Al Baqarah: 255)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:</strong>&nbsp;Siapa yang membacanya ketika petang, maka ia akan dilindungi (oleh Allah dari berbagai gangguan) hingga pagi. Siapa yang membacanya ketika pagi, maka ia akan dilindungi hingga petang.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn1" name="_ftnref1" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[1]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="2" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[2]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
Membaca surat Al Ikhlas, Al Falaq, An Naas</div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.”&nbsp;</em>(QS. Al Ikhlas: 1-4)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ&nbsp; وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki”.&nbsp;</em>(QS. Al Falaq: 1-5)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<em style="box-sizing: border-box;">“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia.”</em>&nbsp;(QS. An Naas: 1-6)&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Siapa yang mengucapkannya masing-masing tiga kali ketika pagi dan petang, maka segala sesuatu akan dicukupkan untuknya.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn2" name="_ftnref2" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[2]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="3" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[3]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Amsaynaa wa amsal mulku lillah walhamdulillah, laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodir. Robbi as-aluka khoiro maa fii hadzihil lailah wa khoiro maa ba’dahaa, wa a’udzu bika min syarri maa fii hadzihil lailah wa syarri maa ba’dahaa. Robbi a’udzu bika minal kasali wa suu-il kibar. Robbi a’udzu bika min ‘adzabin fin naari wa ‘adzabin fil qobri.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Kami telah memasuki waktu petang dan kerajaan hanya milik Allah, segala puji bagi Allah.&nbsp;<a href="https://rumaysho.com/194-tafsiran-kalimat-laa-ilaha-illallah-menurut-para-ulama-ahli-tafsir.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">Tidak ada ilah (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya</a>. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.Wahai Rabbku, aku mohon kepada-Mu kebaikan di malam ini dan kebaikan sesudahnya. Aku berlindung kepadaMu dari kejahatan malam ini dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepadaMu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di kubur.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah</strong>: Meminta pada Allah kebaikan di malam ini dan kebaikan sesudahnya, juga agar terhindar dari kejelekan di malam ini dan kejelekan sesudahnya. Di dalamnya berisi pula permintaan agar terhindar dari rasa malas padahal mampu untuk beramal, juga agar terhindar dari kejelekan di masa tua. Di dalamnya juga berisi permintaan agar&nbsp;<a href="https://rumaysho.com/1110-keutamaan-surat-al-mulk-mencegah-dari-siksa-kubur.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">terselamatkan dari siksa kubur</a>&nbsp;dan siksa neraka yang merupakan siksa terberat di hari kiamat kelak.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn3" name="_ftnref3" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[3]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="4" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[4]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Allahumma bika amsaynaa wa bika ash-bahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu petang, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi. Dengan rahmat dan pertolonganMu kami hidup dan dengan kehendakMu kami mati. Dan kepada-Mu tempat kembali (bagi semua makhluk).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)&nbsp;<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn4" name="_ftnref4" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[4]</strong></a></strong></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="5" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[5]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
Membaca&nbsp;<em style="box-sizing: border-box;">Sayyidul Istighfar</em></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Allahumma anta robbii laa ilaha illa anta, kholaqtanii wa anaa ‘abduka wa anaa ‘ala ‘ahdika wa wa’dika mas-tatho’tu. A’udzu bika min syarri maa shona’tu. Abu-u laka bi ni’matika ‘alayya wa abu-u bi dzambii. Fagh-firlii fainnahu laa yagh-firudz dzunuuba illa anta.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku). Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku. Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa mengucapkan dzikir ini di siang hari dalam keadaan penuh keyakinan, lalu ia mati pada hari tersebut sebelum petang hari, maka ia termasuk penghuni surga. Barangsiapa yang mengucapkannya di malam hari dalam keadaan penuh keyakinan, lalu ia mati sebelum pagi, maka ia termasuk penghuni surga.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn5" name="_ftnref5" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[5]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="6" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[6]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Allahumma inni amsaytu usy-hiduka wa usy-hidu hamalata ‘arsyika wa malaa-ikatak wa jami’a kholqik, annaka antallahu laa ilaha illa anta wahdaka laa syariika lak, wa anna Muhammadan ‘abduka wa rosuuluk.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Ya Allah, sesungguhnya aku di waktu petang ini mempersaksikan Engkau, malaikat yang memikul ‘Arys-Mu, malaikat-malaikat dan seluruh makhluk-Mu, bahwa sesungguhnya Engkau adalah Allah, tiada ilah yang berhak disembah kecuali Engkau semata, tiada sekutu bagi-Mu dan sesungguhnya Muhammad adalah hamba dan utusan-Mu.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 4 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah</strong>: Barangsiapa yang mengucapkan dzikir ini ketika pagi dan petang hari sebanyak empat kali, maka Allah akan membebaskan dirinya dari&nbsp;<a href="https://rumaysho.com/21229-doa-meminta-perlindungan-dari-siksa-neraka-dari-kejelekan-kaya-dan-miskin.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">siksa neraka</a>.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn6" name="_ftnref6" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[6]</strong></a></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: red; font-size: 14pt;">[7]</span></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Allahumma innii as-alukal ‘afwa wal ‘aafiyah fid dunyaa wal aakhiroh. Allahumma innii as-alukal ‘afwa wal ‘aafiyah fii diinii wa dun-yaaya wa ahlii wa maalii. Allahumas-tur ‘awrootii wa aamin row’aatii. Allahummahfazh-nii mim bayni yadayya wa min kholfii wa ‘an yamiinii wa ‘an syimaalii wa min fawqii wa a’udzu bi ‘azhomatik an ugh-taala min tahtii.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan di dunia dan akhirat. Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan dalam agama, dunia, keluarga dan hartaku. Ya Allah, tutupilah auratku (aib dan sesuatu yang tidak layak dilihat orang) dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari muka, belakang, kanan, kiri dan atasku. Aku berlindung dengan kebesaran-Mu, agar aku tidak disambar dari bawahku (oleh ular atau tenggelam dalam bumi dan lain-lain yang membuat aku jatuh).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Rasulullah&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>&nbsp;tidaklah pernah meninggalkan do’a ini di pagi dan petang hari. Di dalamnya berisi perlindungan dan keselamatan pada agama, dunia, keluarga dan harta dari berbagai macam gangguan yang datang dari berbagai arah.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn7" name="_ftnref7" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[7]</a></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: red; font-size: 14pt;">[8]</span></div>
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا&nbsp;<strong style="box-sizing: border-box;">أَوْ أَجُرَّهُ</strong>&nbsp;إِلَى مُسْلِمٍ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Allahumma ‘aalimal ghoybi wasy-syahaadah faathiros samaawaati wal ardh. Robba kulli syai-in wa maliikah. Asyhadu alla ilaha illa anta. A’udzu bika min syarri nafsii wa min syarrisy-syaythooni wa syirkihi, wa an aqtarifa ‘alaa nafsii suu-an<strong style="box-sizing: border-box;">&nbsp;aw ajurrohu</strong>&nbsp;ilaa muslim.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Ya Allah, Yang Maha Mengetahui yang ghaib dan yang nyata, wahai Rabb pencipta langit dan bumi, Rabb segala sesuatu dan yang merajainya. Aku bersaksi bahwa tidak ada ilah yang berhak disembah kecuali Engkau. Aku berlindung kepadaMu dari kejahatan diriku, setan dan balatentaranya (godaan untuk berbuat syirik pada Allah), dan aku (berlindung kepada-Mu) dari berbuat kejelekan terhadap diriku atau menyeretnya kepada seorang muslim.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Do’a ini diajarkan oleh Rasulullah&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam</em>&nbsp;pada Abu Bakr Ash Shiddiq untuk dibaca pada pagi, petang dan saat beranjak tidur.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn8" name="_ftnref8" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[8]</a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="9" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[9]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Bismillahilladzi laa yadhurru ma’asmihi syai-un fil ardhi wa laa fis samaa’ wa huwas samii’ul ‘aliim.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan langit tidak akan berbahaya, Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah</strong>: Barangsiapa yang mengucapkan dzikir tersebut sebanyak tiga kali di pagi hari dan tiga kali di petang hari, maka tidak akan ada bahaya yang tiba-tiba yang memudaratkannya.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn9" name="_ftnref9" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[9]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="10" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[10]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Rodhiitu billaahi robbaa wa bil-islaami diinaa, wa bi-muhammadin shallallaahu ‘alaihi wa sallama nabiyyaa.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Aku ridha Allah sebagai Rabb, Islam sebagai agama dan Muhammad&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam&nbsp;</em>sebagai nabi.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang mengucapkan hadits ini sebanyak tiga kali di pagi hari dan tiga kali di petang hari, maka pantas baginya&nbsp;<a href="https://rumaysho.com/16814-doa-mohon-ridha-allah-ketika-sujud.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">mendapatkan ridha Allah</a>.<strong style="box-sizing: border-box;">&nbsp;<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn10" name="_ftnref10" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[10]</strong></a></strong></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="11" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[11]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Yaa Hayyu Yaa Qoyyum, bi-rohmatika as-taghiits, wa ash-lih lii sya’nii kullahu wa laa takilnii ilaa nafsii thorfata ‘ainin abadan.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri (tidak butuh segala sesuatu), dengan rahmat-Mu aku minta pertolongan, perbaikilah segala urusanku dan jangan diserahkan kepadaku sekali pun sekejap mata (tanpa mendapat pertolongan dariMu).”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 1 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Dzikir ini diajarkan oleh Nabi&nbsp;<em style="box-sizing: border-box;">shallallahu ‘alaihi wa sallam&nbsp;</em>pada Fathimah supaya diamalkan pagi dan petang.<strong style="box-sizing: border-box;">&nbsp;<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn11" name="_ftnref11" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[11]</strong></a></strong></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="12" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[12]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
سُبْحَانَ اللهِ وَبِحَمْدِهِ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Subhanallah wa bi-hamdih.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Maha suci Allah, aku memuji-Nya.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 100 x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang mengucapkan kalimat ‘<em style="box-sizing: border-box;">subhanallah wa bi hamdih</em>’ di pagi dan petang hari sebanyak 100 x, maka tidak ada yang datang pada hari kiamat yang lebih baik dari yang ia lakukan kecuali orang yang mengucapkan semisal atau lebih dari itu.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn12" name="_ftnref12" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[12]</strong></a></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="13" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[13]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">Laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodiir.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Tidak ada ilah yang berhak disembah selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu<strong style="box-sizing: border-box;">.” (Dibaca 1o x)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Barangsiapa yang membaca dzikir tersebut di pagi hari sebanyak sepuluh kali, Allah akan mencatatkan baginya 10 kebaikan, menghapuskan baginya 10 kesalahan, ia juga mendapatkan kebaikan semisal memerdekakan 10&nbsp;<a href="https://rumaysho.com/1790-pembantu-bukanlah-budak.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">budak</a>, Allah akan melindunginya dari gangguan setan hingg petang hari. Siapa yang mengucapkannya di petang hari, ia akan mendapatkan keutamaan semisal itu pula.<strong style="box-sizing: border-box;">&nbsp;<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn13" name="_ftnref13" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[13]</strong></a></strong></div>
</h2>
<h3 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 22px; font-weight: 400; line-height: 30px; margin: 27px 0px 17px;">
<span id="14" style="box-sizing: border-box;"><span style="box-sizing: border-box; color: red;">[14]</span></span></h3>
<h2 style="box-sizing: border-box; color: #222222; font-family: &quot;Open Sans&quot;, arial, sans-serif; font-size: 27px; font-weight: 400; letter-spacing: -0.02em; line-height: 38px; margin: 30px 0px 20px; text-align: center;">
<div dir="RTL" style="box-sizing: border-box; font-family: &quot;Traditional Arabic&quot;; font-size: 23px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word;">
<em style="box-sizing: border-box;">A’udzu bikalimaatillahit-taammaati min syarri maa kholaq.</em></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<span style="box-sizing: border-box; color: blue; font-size: 14pt;">Artinya:</span></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
“Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakanNya.”&nbsp;<strong style="box-sizing: border-box;">(Dibaca 3 x pada waktu petang)</strong></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;">Faedah:&nbsp;</strong>Siapa yang mengucapkannya di petang hari, niscaya tidak ada racun atau binatang (seperti: kalajengking) yang mencelakakannya di malam itu.<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftn14" name="_ftnref14" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><strong style="box-sizing: border-box;">[14]</strong></a></div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<strong style="box-sizing: border-box;"><span style="box-sizing: border-box; font-size: 12pt;">Baca Juga:</span></strong></div>
<ul style="box-sizing: border-box; color: black; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; list-style-position: inside; padding: 0px; text-align: left;">
<li style="box-sizing: border-box; line-height: 24px;"><strong style="box-sizing: border-box;"><a href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><span style="box-sizing: border-box; color: red; font-size: 12pt;">Bacaan Dzikir Pagi</span></a></strong></li>
<li style="box-sizing: border-box; line-height: 24px;"><a href="https://rumaysho.com/14243-manfaatkah-dzikir-pagi-petang-bagi-keluarga.html" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;"><span style="box-sizing: border-box; color: red;"><strong style="box-sizing: border-box;"><span style="box-sizing: border-box; font-size: 12pt;">Manfaatkah Dzikir Pagi Petang Bagi Keluarga?</span></strong></span></a></li>
</ul>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref1" name="_ftn1" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[1]</a>&nbsp;HR. Al Hakim (1: 562). Syaikh Al Albani menshahihkan hadits tersebut dalam Shahih At Targhib wa At Tarhib no. 655.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref2" name="_ftn2" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[2]</a>&nbsp;HR. Abu Daud no. 5082, Tirmidzi no. 3575. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini hasan.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref3" name="_ftn3" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[3]</a>&nbsp;HR. Muslim no. 2723. Lihat keterangan Syarh Hisnul Muslim, hal. 161.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref4" name="_ftn4" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[4]</a>&nbsp;HR. Tirmidzi no. 3391 dan Abu Daud no. 5068. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini&nbsp;<em style="box-sizing: border-box;">shahih</em>.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref5" name="_ftn5" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[5]</a>&nbsp;HR. Bukhari no. 6306.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref6" name="_ftn6" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[6]</a>&nbsp;HR. Abu Daud no. 5069. Al Hafizh Abu Thohir mengatakan bahwa hadits ini hasan.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref7" name="_ftn7" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[7]</a>&nbsp;HR. Abu Daud no. 5074 dan Ibnu Majah no. 3871. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini shahih.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref8" name="_ftn8" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[8]</a>&nbsp;HR. Tirmidzi no. 3392 dan Abu Daud no. 5067. Al Hafizh Abu Thohir mengatakan bahawa sanad hadits ini shahih. Adapun kalimat terakhir (وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرُّهُ إِلَى مُسْلِمٍ) adalah tambahan dari riwayat Ahmad 2: 196. Dikomentari oleh Syaikh Syu’aib Al Arnauth bahwa hadits tersebut shahih dilihat dari jalur lainnya (shahih lighoirihi).</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref9" name="_ftn9" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[9]</a>&nbsp;HR. Abu Daud no. 5088, 5089, Tirmidzi no. 3388, dan Ibnu Majah no. 3869. Al Hafizh Abu Thohir mengatakan bahwa sanad hadits ini hasan.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref10" name="_ftn10" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[10]</a>&nbsp;HR. Abu Daud no. 5072, Tirmidzi no. 3389. Al Hafizh Abu Thohir mengatakan bahwa hadits ini hasan.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref11" name="_ftn11" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[11]</a>&nbsp;HR. Ibnu As Sunni dalam ‘Amalul Yaum wal Lailah no. 46, An Nasai dalam Al Kubro (381/ 570), Al Bazzar dalam musnadnya (4/ 25/ 3107), Al Hakim (1: 545). Sanad hadits ini hasan sebagaimana dikatakan oleh Syaikh Al Albani dalam As Silsilah Ash Shahihah no. 227.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref12" name="_ftn12" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[12]</a>&nbsp;HR. Muslim no. 2692.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref13" name="_ftn13" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[13]</a>&nbsp;HR. An Nasai Al Kubra 6: 10.</div>
<div style="box-sizing: border-box; font-family: Verdana, Geneva, sans-serif; font-size: 13px; letter-spacing: normal; line-height: 21px; margin-bottom: 21px; overflow-wrap: break-word; text-align: left;">
<a href="https://rumaysho.com/1638-bacaan-dzikir-petang.html#_ftnref14" name="_ftn14" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: border-box; color: #dd3333; text-decoration-line: none !important;">[14]</a>&nbsp;HR. Ahmad 2: 290. Syaikh Syu’aib Al Arnauth mengatakan bahwa sanad hadits ini shahih sesuai syarat Muslim. Lihat komentar Syaikh Syu’aib Al Arnauth terhadap hadits ini untuk pengertian hummah diartikan dengan racun atau sengatan kalajengking.</div>
</h2>

            
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>    
    </div>
  </div>

  <div class="q-pa-md">
    <div class="q-gutter-md row">
<div class="q-pa-md q-gutter-sm">
    <q-btn label="DAFTAR MEMBER" color="primary" @click="layout3 = true" />
    <q-dialog v-model="layout3">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Daftar Peserta</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>

            <template>
  <div class="q-pa-md">
    <q-table
      :data="employees"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>



   </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
   </div>
  </div>




</template>

      </q-toolbar>
    </q-header>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>





<style scoped>

  #form {
    margin-top: 15%; 
  }
  
</style>

<script>
import axios from 'axios'
export default {
  name: 'MyLayout',
  data () {
    return {
    sername : "",
    jeniskelamin : "",
    email : "",
    password: "",

      layout: false,
      layout1: false,
      layout2: false,
      layout3: false
  
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/Users', {
    username: self.username,
    jeniskelamin: self.jeniskelamin,
    email: self.email,
    password: self.password

    })
    .then(function (response) {
      return  self.$router.push('/users')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>