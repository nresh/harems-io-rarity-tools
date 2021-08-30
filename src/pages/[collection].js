// react
import {useState} from 'react'

// next
import Head from 'next/head'


import getOpenSea from '../get-open-sea'

// components
import AllCollectionsTable from "../components/all-collections-table"
import CollectionGroup from "../components/collection-group"
import Layout from "../components/layout"
import RightAd from "../components/right-ad"
import TopAd from "../components/top-ad"
import TopListCard from "../components/top-list-card"
import SearchBar from "../components/search-bar"

// export async function getStaticPaths() {
//   // const paths = Object.keys(slugs).map(k => { return { params: {collection: k } } })
//
//   return {
//     paths: [],
//     fallback: false
//   }
// }

// export async function getStaticProps({params}) {
export async function getServerSideProps({params}) {
  const openSeaData = await getOpenSea("withCache")
  const allCollections = openSeaData.allCollections
  const collection = allCollections.find(c => c.slug == params.collection)

  return {
    props: {
      allCollections: allCollections,
      newCollections: [],
      collection: collection
    }
  }
}

// export async function getServerSideProps({params}) {
//
// }

export default function Collection(props) {
  return (
    <Layout title={`${props.collection.name} | rarity.harems.io`} collectionsList={props.allCollections} newList={props.newCollections}>
    <div className="flex-1 overflow-hidden lg:flex lg:flex-row bg">
      <div className="max-h-full pt-3 borderLine bg dark:text-gray-200 sidebar lg:overflow-y-scroll scrollColor">
        <div className="flex flex-row flex-wrap justify-center align-middle lg:mb-2 lg:flex-col">
          <h3 className="mb-0 mr-1.5 lg:mr-0 lg:text-lg lg:font-extrabold text-center lg:text-gray-600 lg:mb-1 textColor700OrWhite font-bold">
              Project
            </h3>
          <div className="mb-0 text-center lg:mb-3">
            <select className="px-1 m-auto font-bold text-pink-700 border border-gray-400 rounded-lg cursor-pointer  focus-within:outline-none bgInput textInput" style={{width: "220px"}}>
              <option value="0n1-force"> 0N1 Force </option>
              <option value="24px"> 24px </option>
              <option value="8bituniverse"> 8 BIT UNIVERSE </option>
              <option value="absurdarboretum"> Absurd Arboretum </option>
              <option value="alphabetty-doodles"> AlphaBetty Doodles </option>
              <option value="altdoges"> Altdoges </option>
              <option value="angels-of-aether"> Angels of Aether </option>
              <option value="animalworldwar"> AnimalWorldWar </option>
              <option value="animetas"> Animetas </option>
              <option value="ape-gang"> Ape Gang </option>
              <option value="ape-harbour-yachts"> Ape Harbour Yachts </option>
              <option value="apesofspace-official"> ApesOfSpace </option>
              <option value="arabian-camels"> Arabian Camels </option>
              <option value="art-stars-1"> Art Stars Club Official </option>
              <option value="avastar"> Avastars </option>
              <option value="axie"> Axie Origins </option>
              <option value="badassbulls"> Badass Bulls </option>
              <option value="barn-owlz"> Barn Owlz </option>
              <option value="based-fish-mafia"> Based Fish Mafia </option>
              <option value="bastard-gan-punks-v2"> BASTARD GAN PUNKS V2 </option>
              <option value="bearsontheblock"> BearsOnTheBlock </option>
              <option value="blazedcats"> BlazedCats </option>
              <option value="blobmob"> Blob Mob </option>
              <option value="blockchainbikers"> BlockchainBikers </option>
              <option value="bones-and-bananas"> Bones &amp, Bananas </option>
              <option value="bonsai-zenft"> Bonsai by ZENFT </option>
              <option value="bored-ape-kennel-club"> Bored Ape Kennel Club </option>
              <option value="bored-mummy-baby-waking-up"> Bored Mummy Baby Waking Up </option>
              <option value="bored-mummy-waking-up"> Bored Mummy Waking Up </option>
              <option value="boredapeyachtclub"> Bored Ape YC </option>
              <option value="boring-bananas-company"> Boring Bananas Co. </option>
              <option value="bullseum"> BULLSEUM </option>
              <option value="bullsontheblock"> BullsOnTheBlock </option>
              <option value="buzzedbears"> Buzzed Bear Hideout </option>
              <option value="byopills"> BYOPills </option>
              <option value="caninecartel"> CanineCartel </option>
              <option value="caninecountryclub"> Canine Country Club </option>
              <option value="catctus"> Catctus Collectibles </option>
              <option value="catshitcrazy"> Catshit Crazy </option>
              <option value="chads-nft"> Chads NFT </option>
              <option value="chainfaces"> ChainFaces </option>
              <option value="chibidinos"> CHIBI DINOS </option>
              <option value="chihuahua-gang-revenge"> Chihuahua Gang </option>
              <option value="chill-frogs"> Chill Frogs NFT </option>
              <option value="chiptopunksnft"> Chiptopunks NFT </option>
              <option value="chubbies"> Chubbies </option>
              <option value="chunky-cow-club-tour-official"> Chunky Cow Club </option>
              <option value="ciphersquares-official"> Ciphersquares Official </option>
              <option value="citizens-of-bulliever-island"> Citizens of Bulliever Island </option>
              <option value="collectvox"> Vox Collectibles </option>
              <option value="cool-cats-nft"> Cool Cats NFT </option>
              <option value="covidpunksnft"> COVIDPunks! </option>
              <option value="crazy-crows-chess-club"> Crazy Crows Chess Club </option>
              <option value="crazy-lizard-army"> Crazy Lizard Army </option>
              <option value="creativeartquest"> Creative Art Quest </option>
              <option value="criminaldonkeys"> Criminal Donkeys </option>
              <option value="crumbys-bakery"> Crumbys Bakery </option>
              <option value="cryptinies"> Cryptinies </option>
              <option value="crypto-corgis"> Crypto Corgis </option>
              <option value="crypto-hodlers-nft"> Crypto Hodlers NFT </option>
              <option value="cryptobabypunksopensea"> The CryptoBabyPunks </option>
              <option value="cryptocannabisclub"> Crypto Cannabis Club </option>
              <option value="cryptodickbutts-s3"> CryptoDickbutts S3 </option>
              <option value="cryptofighters"> CryptoFighters </option>
              <option value="cryptoghostsnft"> Crypto Ghosts NFT </option>
              <option value="cryptopunks"> CryptoPunks </option>
              <option value="cryptoskulls"> CryptoSkulls </option>
              <option value="cryptotrunks"> CryptoTrunks </option>
              <option value="cryptotuners"> Crypto Tuners </option>
              <option value="cunningfoxes"> Cunning Foxes </option>
              <option value="cutepigclub"> Cute Pig Club </option>
              <option value="cyberkongz"> CyberKongz </option>
              <option value="cyberkongz-vx"> CyberKongz VX </option>
              <option value="cyphercity"> Cypher City </option>
              <option value="dapper-space-collective"> Dapper Space Collective </option>
              <option value="deadbears-official"> Deadbears Official </option>
              <option value="deaddudeproject"> Dead Dude Project </option>
              <option value="deadfellaz"> DeadFellaz </option>
              <option value="deadheads"> DeadHeads </option>
              <option value="deebies"> Deebies </option>
              <option value="degens-farm"> Degen'$ Farm </option>
              <option value="degenz"> Degenz </option>
              <option value="derpy-birbs"> Derpy Birbs </option>
              <option value="devious-demon-dudes"> Devious Demon Dudes </option>
              <option value="divine-zodiac"> Divine Zodiac </option>
              <option value="dizzydragons"> Dizzy Dragons </option>
              <option value="dope-shibas"> Dope Shibas </option>
              <option value="dreamloops"> Dreamloops </option>
              <option value="dystopunks-v2"> DystoPunks V2 </option>
              <option value="etheremura"> Etheremura </option>
              <option value="fameladysquad"> FameLadySquad </option>
              <option value="fast-food-punks"> Fast Food Punks </option>
              <option value="fluf-world"> FLUF World </option>
              <option value="forgottenruneswizardscult"> Forgotten Runes Wizards </option>
              <option value="fuckintrolls"> The Fuckin' Trolls </option>
              <option value="fud-monsters"> FUD Monsters </option>
              <option value="fvck-crystal"> FVCK_CRYSTAL// </option>
              <option value="galactic-secret-agency"> Galactic Secret Agency </option>
              <option value="galaxy-fight-club"> Galaxy Fight Club </option>
              <option value="gauntlets"> Gauntlets </option>
              <option value="gluefactoryshow"> Glue Factory Show </option>
              <option value="goblin-goons"> Goblin Goons </option>
              <option value="goonsofbalatroon"> Goons of Balatroon </option>
              <option value="gorillanemesis"> Gorilla Nemesis </option>
              <option value="graycraft-2"> GRAYCRAFT2 </option>
              <option value="great-ape-society"> Great Ape Society </option>
              <option value="guttercatgang"> Gutter Cat Gang </option>
              <option value="gutterrats"> Gutter Rats </option>
              <option value="hall-of-fame-goat-lodge"> HOF Goat Lodge </option>
              <option value="happyland-gummy-bears-official"> HappyLand Gummy Bears </option>
              <option value="hashmasks"> Hashmasks </option>
              <option value="hd--punks"> HDPunks </option>
              <option value="hewerclan"> Hewer Clan </option>
              <option value="highflyers"> Degenerated: High Flyers </option>
              <option value="hodlgangnft"> HODL GANG </option>
              <option value="hodlheads"> HodlHeads </option>
              <option value="incognito-nft"> Incognito </option>
              <option value="junkyarddogs"> JunkYard Dogs </option>
              <option value="kidpunks"> KidPunks </option>
              <option value="kneecaps"> KNEECAPs </option>
              <option value="koala-intelligence-agency"> Koala Intelligence Agency </option>
              <option value="krazykoalas"> Krazy Koalas NFT </option>
              <option value="lambduhs"> Lamb Duhs </option>
              <option value="lazy-lions"> Lazy Lions </option>
              <option value="lion-club"> SportsIcon Lion Club </option>
              <option value="london-gift-v2"> $LONDON Gift </option>
              <option value="lonelyalienspaceclub"> Lonely Alien </option>
              <option value="long-neckie-ladies"> Long Neckie Ladies </option>
              <option value="lostboy-nft"> Lostboy NFT </option>
              <option value="lostsoulssanctuary"> Lost Souls Sanctuary </option>
              <option value="lucha-libre-knockout"> Lucha Libre Knockout </option>
              <option value="luckymaneki"> Lucky Maneki </option>
              <option value="lumpsworld"> Lumps World </option>
              <option value="mad-banana-union"> Mad Banana Union </option>
              <option value="mad-cat-militia"> Mad Cat Militia </option>
              <option value="maestropups-1"> MaestroPups </option>
              <option value="maisondegoat"> GOATz </option>
              <option value="meebits"> Meebits </option>
              <option value="meowbits-collection"> MeowBits Collection </option>
              <option value="misfit-university-official"> Misfit University </option>
              <option value="misscryptoclub"> MissCryptoClub </option>
              <option value="mojibots"> MojiBots </option>
              <option value="monas"> Monas </option>
              <option value="monkeybrix"> Monkeybrix </option>
              <option value="monster-blocks"> Monster Blocks - Official </option>
              <option value="monsterrehab"> Monster Rehab </option>
              <option value="mooncats"> MoonCats </option>
              <option value="moondogs-odyssey"> MOONDOGS ODYSSEY </option>
              <option value="mutant-ape-yacht-club"> Mutant Ape Yacht Club </option>
              <option value="muttniks"> Muttniks </option>
              <option value="myfuckingpickle"> My Fucking Pickle </option>
              <option value="nftlions"> NFTLions </option>
              <option value="nice-drips-"> Nice Drips </option>
              <option value="osiris-cosmic-kids"> Osiris Cosmic Kids </option>
              <option value="pandagolfsquad"> Panda Golf Squad </option>
              <option value="party-penguins"> Party Penguins </option>
              <option value="pepperattack"> Pepper Attack </option>
              <option value="pixls-official"> Pixls Official </option>
              <option value="pork1984"> PORK1984 </option>
              <option value="poshpandas"> Posh Pandas </option>
              <option value="pownft"> POW NFT </option>
              <option value="proceduralspace"> Procedural Space </option>
              <option value="ptbc"> Pirate Treasure BC </option>
              <option value="pudgypenguins"> Pudgy Penguins </option>
              <option value="punkbabies"> PunkBabies </option>
              <option value="punkcats"> PunkCats </option>
              <option value="purrnelopes-country-club"> Purrnelopes Country Club </option>
              <option value="qubits-on-the-ice"> Qubits On The Ice </option>
              <option value="rabbit-college-club"> Rabbit College Club </option>
              <option value="raccoon-secret-society"> Raccoon Secret Society </option>
              <option value="ragingrhinos"> RagingRhinos </option>
              <option value="re-genz"> Re-Genz </option>
              <option value="ready-player-cat-nft"> Ready Player Cat NFT </option>
              <option value="realcryptopunks-by-vt3-com"> RealCryptoPunks </option>
              <option value="rebel-kids"> Rebel Kids </option>
              <option value="rebelbots"> Reb3l Bots </option>
              <option value="recklesswhales"> Reckless Whales </option>
              <option value="rickstro-frens"> Rickstro Frens </option>
              <option value="rivermen"> Rivermen </option>
              <option value="robotos-official"> Robotos Official </option>
              <option value="royalsocietyofplayers"> Royal Society of Players </option>
              <option value="rumble-kong-league"> Rumble Kong League </option>
              <option value="ruumz"> RUUMZ </option>
              <option value="sad-frogs-district"> Sad Frogs District </option>
              <option value="satoshibles"> Satoshibles </option>
              <option value="satoshifaces"> SatoshiFaces </option>
              <option value="save-the-martians"> Save the Martians </option>
              <option value="scoopdogsquad"> ScoopDog Squad </option>
              <option value="secretsocietyofwhales"> Secret Soc. of Whales </option>
              <option value="shabu-town-shibas"> Shabu Town Shibas </option>
              <option value="shiba-society"> Shiba Society </option>
              <option value="slacker-duck-pond"> Slacker Duck Pond </option>
              <option value="slothz"> SLOTHz </option>
              <option value="slumdoge-billionaires"> Slumdoge Billionaires </option>
              <option value="song-a-day"> Song A Day </option>
              <option value="space-punks-club"> SpacePunksClub </option>
              <option value="spacepoggers"> Space Poggers </option>
              <option value="spaceshibas"> SpaceShibas </option>
              <option value="spookies-nft"> Spookies NFT </option>
              <option value="spunks-nft"> Spunks </option>
              <option value="srsc"> Sewer Rat Social Club </option>
              <option value="starchain-official"> Starchain Official </option>
              <option value="starsailorsiblings"> Star Sailor Siblings </option>
              <option value="stoner-cats-official"> Stoner Cats </option>
              <option value="strawberrywtf"> STRAWBERRY.WTF </option>
              <option value="stripperville-nfts"> StripperVille NFTs </option>
              <option value="supducks"> SupDucks </option>
              <option value="superyeti"> Super Yeti </option>
              <option value="svinsfarm"> SVINS </option>
              <option value="sympathyforthedevils"> SympathyForTheDevils </option>
              <option value="the-birdhouse-official"> The BirdHouse </option>
              <option value="the-crypto-saints"> The CryptoSaints </option>
              <option value="the-doge-pound"> The Doge Pound </option>
              <option value="the-kittybutts"> The KittyButts </option>
              <option value="the-monstrocities"> The MonstroCities </option>
              <option value="the-shark-cove"> The Shark Cove </option>
              <option value="the-unstable-horses-yard"> Unstable Horses Yard </option>
              <option value="the-wanderers"> The Wanderers </option>
              <option value="the4001project"> The 4001 Project </option>
              <option value="thealienboy"> The Alien Boy </option>
              <option value="thedudes"> thedudes </option>
              <option value="thekamagang"> Kamagang </option>
              <option value="thekillaz"> The KILLAZ </option>
              <option value="thelostglitches"> The Lost Glitches </option>
              <option value="thenanoz"> The Nanoz </option>
              <option value="thesingularityheroes"> SingularityHeroes </option>
              <option value="thetigersguild"> TheTigersGuild </option>
              <option value="thevisitors"> The Visitors </option>
              <option value="thewickedcraniums"> The Wicked Craniums </option>
              <option value="thewolfgang"> The WolfGang </option>
              <option value="thewonderquest"> The WonderQuest </option>
              <option value="toolsofrock"> Tools Of Rock </option>
              <option value="topdogbeachclub"> Top Dog Beach Club </option>
              <option value="tradesquads"> TradeSquads </option>
              <option value="unitedpunksunion"> United Punks Union </option>
              <option value="untamed-elephants"> Untamed Elephants </option>
              <option value="veefriends"> VeeFriends </option>
              <option value="vegiemon"> Vegiemon </option>
              <option value="visitors-of-imma-degen"> Visitors of Imma Degen </option>
              <option value="vogu"> The Vogu Collective </option>
              <option value="voxies"> Voxies </option>
              <option value="waifusion"> Waifusion </option>
              <option value="wannabesmusicclub"> Wannabes Music Club </option>
              <option value="warriors-of-aradena"> Warriors of Aradena </option>
              <option value="weirdwhales"> Weird Whales </option>
              <option value="whelpsnft"> WhelpsNFT </option>
              <option value="wicked-ape-bone-club"> Wicked Ape Bone Club </option>
              <option value="wickedstallions"> The Wicked Stallions </option>
              <option value="world-of-women-nft"> World of Women </option>
              <option value="zalesi"> Zales I </option>
              <option value="zunks"> Zunks </option>
            </select>
          </div>
          <div className="flex flex-row justify-center mb-0 mb-4 align-middle">
            <input placeholder="ID..." className="block w-20 pl-1 ml-2 text-base text-gray-700 placeholder-pink-400 border border-gray-400 rounded-lg outline-none  lg:ml-0 search focus-within:border-pink-600 bgInput textInput" />
            <input type="submit" value="Lookup" className="ml-1 smallBtn" />
          </div>
        </div>
        <div className="mb-2 text-center lg:hidden">
          <div className="smallBtn"> Show Filters </div>
        </div>
        <div className="mb-6 lg:block hidden">
          <h3 className="mt-4 text-lg font-extrabold text-center text-gray-600 dark:text-gray-300">Item Filters</h3>

          <h3 className="py-1 mx-2 mt-2 text-sm font-extrabold text-center border-gray-300 textColor600">Rarity</h3>
          <div className="flex flex-row items-center justify-center space-x-1">
            <input placeholder="Min Rank #" className="block w-20 text-sm text-center text-gray-700 placeholder-pink-400 border border-gray-400 rounded-lg outline-none  lg:ml-0 search focus-within:border-pink-600 bgInput textInput" />
            <div className="text-sm">-</div>
            <input placeholder="Max Rank #" className="block w-20 text-sm text-center text-gray-700 placeholder-pink-400 border border-gray-400 rounded-lg outline-none  lg:ml-0 search focus-within:border-pink-600 bgInput textInput" />
          </div>
          <div className="text-center">
            <input type="submit" value="Apply" className="mt-1 w-44 smallBtn" />
          </div>
          <h3 className="mt-8 text-lg font-extrabold text-center text-gray-600 dark:text-gray-300">Trait Filters</h3>
          <div className="flex flex-row items-center justify-center mt-1 text-center">
            <input id="drilldown" type="checkbox" />
            <label for="drilldown" className="ml-1 text-sm font-bold text-gray-400 cursor-pointer select-none">Drill Down Mode</label>
          </div>
          <div className="text-center">
            <input type="submit" value="Collapse All" className="
                      inline-block
                      px-2
                      mt-2.5
                      text-sm text-white
                      bg-transparent bg-pink-700
                      dark:bg-pink-800
                      dark:hover:bg-pink-900
                      border border-transparent
                      rounded-lg
                      outline-none
                      cursor-pointer
                      hover:bg-pink-800
                      ml-2text-base
                      btn
                      search
                    "/>
            <input type="submit" value="Expand All" className="inline-block px-2 my-2 text-sm text-white bg-transparent bg-pink-700 border border-transparent rounded-lg outline-none cursor-pointer  dark:hover:bg-pink-900 dark:bg-pink-800 hover:bg-pink-800 ml-2text-base btn search" />
          </div>
          <div className="pb-2 my-2 border-gray-300" style={{maxWidth: "400px", margin: "auto"}}>
            <h3 className="pl-2.5 py-1 mb-2.5 mx-2 text-lg font-extrabold text-pink-600 border-b border-gray-300 borderLine">
        General
      </h3>
            <div className="px-3">
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Punk Type</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Skin Tone</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Full Type</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Attribute Count</span></h4>

              </div>
            </div>
          </div>
          <div className="pb-2 my-2 border-gray-300" style={{maxWidth: "400px", margin: "auto"}}>
            <h3 className="pl-2.5 py-1 mb-2.5 mx-2 text-lg font-extrabold text-pink-600 border-b border-gray-300 borderLine">
        Attributes
      </h3>
            <div className="px-3">
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Hair</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Eyes</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Facial Hair</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Neck Accessory</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Mouth Prop</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Mouth</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Blemishes</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Ears</span></h4>

              </div>
              <div className="mb-2">
                <h4 className="mb-px text-sm text-gray-400 cursor-pointer select-none hover:text-pink-700"><span className="text-gray-400">▷</span>  <span className="font-bold">Nose</span></h4>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg max-h-full px-0.5 lg:px-2 text-lg textColor600 bg-white lg:overflow-y-scroll lg:flex-grow scrollColor">
        <div className="w-full mb-5 overflow-hidden" style={{height: "220px"}}><img src="https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=s2500" className="object-cover object-center w-full h-full" /></div>
        <div>
          <div className="hidden lg:block" style={{width: "728px", height: "120px", margin: "auto"}}>
            <a href="https://www.art-stars.club/" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/artstarsclub2_horiz_d" className="w-full h-auto" style={{ width: "728px", height: "120px"}}/></a>
          </div>
          <div className="block lg:hidden" style={{width: "300px", margin: "auto"}}>
            <a href="https://www.art-stars.club/" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/artstarsclub2_horiz_m" className="w-full h-auto"/></a>
          </div>
          <div className="mt-0.5 text-sm text-center textColor600"> Please visit our sponsors! </div>
        </div>
        <div className="items-center px-4 mt-4 mb-2 ml-4 mr-8 lg:flex lg:flex-row">
          <h1 className="mb-2 text-3xl font-extrabold text-center text-pink-700 lg:text-left dark:text-gray-300 lg:mb-0"><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" loading="lazy" className="w-16 h-auto rounded-full inline mr-2 align-bottom" style={{ width: "2rem", height: "2rem"}} />
              CryptoPunks Ranked by Rarity
            </h1>
          <div className="flex-grow"></div>
          <div className="flex flex-row justify-center mb-4 space-x-1 lg:mb-0"><a href="/cryptopunks" aria-current="page" className="nuxt-link-exact-active nuxt-link-active bigBtn">View Collection</a> <a href="/cryptopunks/traits" className="bigBtnUnselect">Explore Traits</a> <a href="/cryptopunks/wallet" className="bigBtnUnselect">My Wallet</a></div>
        </div>
        <div className="mx-4 mt-3 mb-4 border-b borderLine"></div>
        <div className="pt-2 px-9">


          <div className="px-4 py-3 mx-auto mb-4 text-sm text-gray-200 bg-pink-700 rounded-lg lg:mx-0 notes" style={{maxWidth: "800px"}}><strong>Notice</strong>
            <div>Please read our <a href="/terms" className="">Terms of Use</a> before using this website.</div>
            <div className="text-right underline cursor-pointer">OK</div>
          </div>
          <div>
            <div className="flex flex-col items-start mb-5 lg:flex-row">
              <div style={{maxWidth: "800px"}}>
                <div className="text-sm font-bold textColor600 mb-0.5">Description</div>
                <div className="text-sm text-gray-400 notes">
                  <p>CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.</p>
                </div>
                <div className="mt-1.5 text-gray-400">
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row items-center space-x-1 text-sm">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-link-45deg">
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                        </svg>
                      </div>
                      <div><a target="_blank" href="https://www.larvalabs.com/cryptopunks" className="underline">Website</a></div>
                    </div>
                    <div className="flex flex-row items-center space-x-1 text-sm">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-discord">
                          <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path>
                          <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path>
                        </svg>
                      </div>
                      <div><a target="_blank" href="https://discord.gg/tQp4pSE" className="underline">Discord</a></div>
                    </div>
                    <div className="flex flex-row items-center space-x-1 text-sm">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </svg>
                      </div>
                      <div><a target="_blank" href="https://twitter.com/larvalabs" className="underline">Twitter</a></div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="flex-grow hidden lg:block"></div>
              <div className="mr-6 mt-5 lg:mt-0">
                <div className="flex flex-row space-x-4">
                  <div className="text-sm">
                    <div className="font-bold">7 Day Volume</div>
                    <div className="text-gray-400"> 125,907.98 ETH </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">Total Volume</div>
                    <div className="text-gray-400"> 454,834.04 ETH </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">7 Day Avg Price</div>
                    <div className="text-gray-400"> 109.58 ETH </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">Owners</div>
                    <div className="text-gray-400"> 3043 Owners </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-row flex-wrap">
            <div className="text-sm">
              <div className="font-bold mb-0.5">Ranking Method Preset</div>
              <div className="flex flex-row flex-wrap">
                <div className="mr-1"><a href="/cryptopunks" className="bigBtn">
        rarity.tools v2
      </a></div>
                <div className="mr-1"><a href="/cryptopunks?preset=rarity-tools-1" className="bigBtnUnselect">
        rarity.tools v1
      </a></div>
              </div>
            </div>

          </div>
          <div className="mt-1 mb-2">
            <div className="text-sm mb-0.5 cursor-pointer select-none text-gray-400" style={{maxWidth: "300px"}}><span>▷</span>
              <span>Settings</span></div>

          </div>
          <div className="mt-3 mb-5">


          </div>
        </div>
        <div></div>
        <div className="sticky top-0 z-10 flex flex-col items-center pb-2 pt-1.5 pr-12 bg pl-9">
          <div className="flex flex-col items-center w-full lg:flex-row">

            <div className="flex flex-row flex-wrap items-center justify-center mb-4 lg:justify-start lg:mb-0"></div>
            <div className="flex-grow"></div>
          </div>
          <div className="flex flex-col items-center w-full lg:flex-row">
            <div className="flex flex-row items-center mr-2 text-sm font-bold">
              <div>10,000 Total CryptoPunks</div>


            </div>
            <div className="flex-grow"></div>
            <div className="flex items-center lg:flex-row">
              <div className="mb-2 mr-2 text-sm font-bold lg:mb-0">Sort by</div>
              <select className="px-4 mx-auto mb-2 text-sm font-bold border border-gray-300 rounded-lg cursor-pointer  lg:mb-0 lg:mr-5 focus-within:outline-none bgInput textInput">
                <option value="rarity">Rarity</option>


                <option value="recentlyListed"> Recently Listed </option>
                <option value="byId">ID</option>
              </select>
            </div>
            <div className="w-8 h-6 pt-1 mr-2 text-xs font-bold text-center border border-pink-700 rounded-lg cursor-pointer  hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-gray-700"> IDs </div>
            <div className="w-8 h-6 pt-1 pl-2 mr-4 border border-pink-700 rounded-lg cursor-pointer  hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-image">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path>
              </svg>
            </div>
            <div className="flex flex-row justify-center lg:justify-end justify-end flex-initial flex-shrink-0">

              <div className="flex flex-row items-center space-x-1">

                <div className="smallNoBtn"> Page
                  <input placeholder="Page.." className="text-sm text-center text-gray-700 border border-gray-300 rounded-lg w-14 bgInput textInput" /> of 209 </div>
                <div className="select-none smallBtn">Next &gt,</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row flex-wrap justify-start px-1 py-2 pt-1 ml-4 lg:px-2">
            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#1</div> <a href="https://opensea.io/accounts/DANNYSECURE?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">DANNYSECURE</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/8348" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk8348.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8348?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #8348
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8348?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#2</div> <a href="https://opensea.io/accounts/0xf4b4a58974524e183c275f3c6ea895bc2368e738?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xf4b4</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/7804" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk7804.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7804?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #7804
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7804?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#3</div> <a href="https://opensea.io/accounts/0x405b96e2538ac85ee862e332fa634b158d013ae1?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x405b</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/7523" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk7523.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7523?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #7523
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7523?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#4</div> <a href="https://opensea.io/accounts/0x8884f2af43bcbd9ab81f7a4ac35f421df1926810?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x8884</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/3443" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk3443.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3443?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #3443
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3443?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#5</div> <a href="https://opensea.io/accounts/0x7eb28b2f14a59789ec4c782a5dd957f9c8f33f6b?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x7eb2</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5905" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5905.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5905?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5905
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5905?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#6</div> <a href="https://opensea.io/accounts/0x266892ed0d40ea5c37f3e0239537999c13468311?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x2668</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2890" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2890.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2890?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2890
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2890?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#7</div> <a href="https://opensea.io/accounts/0x7b8961f67382c51c389726667ef7dd7cf95fefd3?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x7b89</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/3100" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk3100.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3100?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #3100
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3100?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#8</div> <a href="https://opensea.io/accounts/0x7eb28b2f14a59789ec4c782a5dd957f9c8f33f6b?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x7eb2</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5822" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5822.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5822?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5822
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5822?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>
            <div className="block w-full lg:hidden">
              <div className="w-full m-auto my-2" style={{width: "300px"}}>
                <a href="https://t.co/VIATfoYDtw" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/luckymaneki2_vert_m" className="w-full h-auto"/></a>
                <div className="text-xs text-center">Please visit our sponsors!</div>
              </div>
            </div>
            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#9</div> <a href="https://opensea.io/accounts/0x897aea3d51dcba918c41ae23f5d9a7411671dee0?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x897a</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/635" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0635.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/635?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #635
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/635?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#10</div> <a href="https://opensea.io/accounts/SethS?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">SethS</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/6089" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk6089.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6089?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #6089
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6089?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#11</div> <a href="https://opensea.io/accounts/0x4d8e16a70f38414f33e8578913eef6a0e4a633b5?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x4d8e</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/6487" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk6487.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6487?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #6487
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6487?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#12</div> <a href="https://opensea.io/accounts/0x7224a1a8750d77c182d7ade10b8edcbd3aae0e2d?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x7224</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/3307" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk3307.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3307?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #3307
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3307?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#13</div> <a href="https://opensea.io/accounts/MR703?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">MR703</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2204" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2204.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2204?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2204
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2204?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#14</div> <a href="https://opensea.io/accounts/sovpunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">sovpunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/641" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0641.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/641?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #641
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/641?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#15</div> <a href="https://opensea.io/accounts/sovpunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">sovpunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/1050" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk1050.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1050?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #1050
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1050?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#16</div> <a href="https://opensea.io/accounts/0xb813c62ad216a274057cd602ad754e3ac8b914a6?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xb813</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/741" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0741.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/741?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #741
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/741?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#17</div> <a href="https://opensea.io/accounts/TokenAngels?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">TokenAngels</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/510" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0510.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/510?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #510
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/510?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#18</div> <a href="https://opensea.io/accounts/SethS?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">SethS</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/281" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0281.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/281?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #281
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/281?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#19</div> <a href="https://opensea.io/accounts/DANNYSECURE?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">DANNYSECURE</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2202" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2202.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2202?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2202
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2202?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#20</div> <a href="https://opensea.io/accounts/0xb88f61e6fbda83fbfffabe364112137480398018?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xb88f</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/4121" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk4121.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4121?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #4121
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4121?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#21</div> <a href="https://opensea.io/accounts/sovpunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">sovpunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/7920" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk7920.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7920?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #7920
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7920?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#22</div> <a href="https://opensea.io/accounts/0x03205743e7fc513a073ae39097204cb07591b910?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x0320</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5622" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5622.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5622?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5622
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5622?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#23</div> <a href="https://opensea.io/accounts/0xe301612b0751f6d862a27be205fb8e3c40c8c6db?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xe301</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/3011" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk3011.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3011?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #3011
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3011?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#24</div> <a href="https://opensea.io/accounts/0x7174039818a41e1ae40fdcfa3e293b0f41592af2?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x7174</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/8152" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk8152.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8152?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #8152
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8152?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#25</div> <a href="https://opensea.io/accounts/0xcffc336e6d019c1af58257a0b10bf2146a3f42a4?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xcffc</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/6153" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk6153.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6153?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #6153
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6153?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#26</div> <a href="https://opensea.io/accounts/TokenAngels?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">TokenAngels</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5949" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5949.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5949?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5949
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5949?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#27</div> <a href="https://opensea.io/accounts/sovpunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">sovpunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/755" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0755.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/755?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #755
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/755?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#28</div> <a href="https://opensea.io/accounts/0xbcb8c532636f9b6b59ef417203ce60c1577bbe19?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xbcb8</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/1839" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk1839.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1839?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #1839
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1839?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#29</div> <a href="https://opensea.io/accounts/blockomoco?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">blockomoco</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/7971" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk7971.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7971?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #7971
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7971?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#30</div> <a href="https://opensea.io/accounts/0x2cc12318de28edc9c753f7cb22100890af630c2d?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x2cc1</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/8498" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk8498.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8498?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #8498
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8498?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#31</div> <a href="https://opensea.io/accounts/SethS?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">SethS</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/9280" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk9280.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9280?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #9280
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9280?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#32</div> <a href="https://opensea.io/accounts/0x33eaaee9d0a6192d11bbb370aee0e5d22c3335b5?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x33ea</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/4464" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk4464.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4464?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #4464
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4464?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#33</div> <a href="https://opensea.io/accounts/straybits?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">straybits</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5577" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5577.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5577?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5577
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5577?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#34</div> <a href="https://opensea.io/accounts/0xe301612b0751f6d862a27be205fb8e3c40c8c6db?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xe301</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5217" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5217.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5217?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5217
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5217?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#35</div> <a href="https://opensea.io/accounts/0x99b5?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x99b5</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/6965" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk6965.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6965?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #6965
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6965?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#36</div> <a href="https://opensea.io/accounts/SethS?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">SethS</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5795" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5795.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5795?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5795
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5795?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#37</div> <a href="https://opensea.io/accounts/0xc352b534e8b987e036a93539fd6897f53488e56a?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xc352</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/372" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk0372.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/372?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #372
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/372?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#38</div> <a href="https://opensea.io/accounts/DANNYSECURE?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">DANNYSECURE</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2924" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2924.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2924?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2924
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2924?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#39</div> <a href="https://opensea.io/accounts/TokenAngels?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">TokenAngels</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/4178" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk4178.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4178?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #4178
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4178?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#40</div> <a href="https://opensea.io/accounts/thebeautyandthepunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">thebeautyandthepunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2491" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2491.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2491?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2491
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2491?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#41</div> <a href="https://opensea.io/accounts/gmoneyvault?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">gmoneyvault</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/8219" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk8219.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8219?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #8219
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8219?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#42</div> <a href="https://opensea.io/accounts/0x8adbff0b3a45059c0578a05e00c7bf38c4f349a9?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x8adb</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/6915" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk6915.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6915?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #6915
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6915?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#43</div> <a href="https://opensea.io/accounts/0x1757d400578cf8a2f3da8228e4402fb1bb3fc968?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0x1757</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/5314" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk5314.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5314?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #5314
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/5314?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#44</div> <a href="https://opensea.io/accounts/0xb62986dc13663827535e3f4f038c745a23ce3e67?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xb629</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2386" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2386.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2386?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2386
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2386?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#45</div> <a href="https://opensea.io/accounts/niftynaut?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">niftynaut</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2460" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2460.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2460?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2460
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2460?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#46</div> <a href="https://opensea.io/accounts/4156?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">4156</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/4156" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk4156.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4156?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #4156
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4156?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#47</div> <a href="https://opensea.io/accounts/0xd6a984153acb6c9e2d788f08c2465a1358bb89a7?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">0xd6a9</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/2140" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk2140.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2140?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #2140
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2140?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

            <div>
              <div className="
          m-1
          lg:m-1.5
          mb-2
          border
          overflow-hidden
          transition-all
          border-gray-300
          dark:border-gray-800
          rounded-md
          shadow-md
          hover:border-pink-600
          hover:-translate-y-1.5
          hover:shadow-lg
          transform
          bg-white
          bgCard
        " style={{padding: "4px", maxWidth: "158px", willChange: "opacity"}}>
                <div className="flex flex-row items-baseline px-1 pr-1 overflow-hidden">
                  <div className="flex-grow font-extrabold">#48</div> <a href="https://opensea.io/accounts/thebeautyandthepunk?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank" className="block ml-1 text-sm link whitespace-nowrap dark:text-gray-400">thebeautyandthepunk</a></div>
                <div className="overflow-hidden rounded-md m-0.5" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}>
                  <a href="/cryptopunks/view/1021" className=""><img decoding="async" loading="eager" src="https://www.larvalabs.com/public/images/cryptopunks/punk1021.png" className="m-auto cursor-pointer pixellate" style={{width: "144px", height: "144px", backgroundColor: "rgb(99, 133, 150)"}}/></a>
                </div>
                <div className="text-sm font-bold overflow-ellipsis"><a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1021?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="block w-full px-1 overflow-hidden text-sm dark:text-gray-300 link whitespace-nowrap overflow-ellipsis">
              CryptoPunk #1021
            </a></div>
                <div className="mb-1 text-xs font-bold text-gray-400"> &nbsp,
                  <a target="_blank" href="https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1021?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" className="link"></a>

                </div>
              </div>
            </div>

          </div>
          <div>
            <div className="mt-6 ml-2 mr-12">
              <div className="hidden lg:block" style={{width: "120px"}}>
                <a href="https://t.co/VIATfoYDtw" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/luckymaneki2_vert_d" className="w-full h-auto"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center lg:justify-end px-12">
          <div className="flex-row items-center hidden align-middle lg:space-x-1 lg:flex">
            <div className="smallNoBtn">Pages</div>
            <div className="select-none smallNoBtn"> 1 </div>
            <div className="select-none smallBtn"> 2 </div>
            <div className="select-none smallBtn"> 3 </div>
            <div className="smallNoBtn">...</div>
            <div className="select-none smallBtn"> 207 </div>
            <div className="select-none smallBtn"> 208 </div>
            <div className="select-none smallBtn"> 209 </div>
          </div>
          <div className="flex-grow hidden lg:block"></div>
          <div className="flex flex-row items-center space-x-1">

            <div className="smallNoBtn"> Page
              <input placeholder="Page.." className="text-sm text-center text-gray-700 border border-gray-300 rounded-lg w-14 bgInput textInput" /> of 209 </div>
            <div className="select-none smallBtn">Next &gt,</div>
          </div>
        </div>


        <div className="mt-8">
          <div className="hidden lg:block" style={{width: "728px", height: "120px", margin: "auto"}}>
            <a href="https://www.art-stars.club/" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/artstarsclub2_horiz_d" className="w-full h-auto" style={{ width: "728px", height: "120px"}}/></a>
          </div>
          <div className="block lg:hidden" style={{width: "300px", margin: "auto"}}>
            <a href="https://www.art-stars.club/" target="_blank"><img loading="lazy" src="https://ewr1.vultrobjects.com/current/artstarsclub2_horiz_m" className="w-full h-auto"/></a>
          </div>
          <div className="mt-0.5 text-sm text-center textColor600"> Please visit our sponsors! </div>
        </div>
        <div className="mt-20">
          <h1 className="px-8 pb-2 text-3xl font-extrabold text-center textColor700 lg:mb-0 lg:text-left">Newest Collections Added</h1>
          <div className="mx-4 mb-5 border-b borderLine"></div>
          <div className="flex flex-row flex-wrap justify-center px-4 lg:justify-start">
            <div className="mb-4 ml-4 overflow-hidden border border-gray-300 rounded-lg shadow-md bgCard dark:border-gray-800">
              <div className="w-72">
                <a href="/chiptopunksnft" className="">
                  <div className="relative w-full overflow-hidden" style={{height: "220px"}}>
                    <img src="https://lh3.googleusercontent.com/CuYRztpcnnWs-fWMT495buKYGGwMPyo3qGqCabghxY8m_n2trVnOEwa75toXNXw6Q5z8INpVi7pyNVb-auqq-sR5Ltj3Zh6jdcadk6Y=s2500" className="object-cover object-center w-full h-full"/></div>
                  <div className="flex flex-row mt-2">
                    <div className="p-2 ml-2">
                      <div className="font-bold text-pink-600 dark:text-gray-300"> Chiptopunks NFT </div>
                      <div className="text-sm text-gray-400">Added 30 Aug 2021</div>
                      <div className="text-sm text-gray-400">Owners: 305</div>
                      <div className="text-sm text-gray-400">Total Volume: 1,645.22 ETH</div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-3 mr-3" style={{maxWidth: "3rem"}}><img src="https://lh3.googleusercontent.com/TtBoKb-Qp6exyyOJr8IFE3vn28L10qdR2qnyL0o4laF1yeenlIXOBHY7aF_4QwNzdTY781XjWtSk2RsH6gqbXUvlgTtc1G9oBE2T=s120" loading="lazy" className="w-16 h-auto rounded-full"/></div>
                  </div>
                  <div className="p-4 pt-2 text-sm notes dark:text-gray-300">
                    <p>Chiptopunks is a collection of 512 unique and animated 3D rendered punks made entirely out of computer parts. Not Affiliated with LarvaLab's Cryptopunks</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-4 ml-4 overflow-hidden border border-gray-300 rounded-lg shadow-md bgCard dark:border-gray-800">
              <div className="w-72">
                <a href="/mutant-ape-yacht-club" className="">
                  <div className="relative w-full overflow-hidden" style={{height: "220px"}}>
                    <img src="https://lh3.googleusercontent.com/5c-HcdLMinTg3LvEwXYZYC-u5nN22Pn5ivTPYA4pVEsWJHU1rCobhUlHSFjZgCHPGSmcGMQGCrDCQU8BfSfygmL7Uol9MRQZt6-gqA=s2500" className="object-cover object-center w-full h-full"/></div>
                  <div className="flex flex-row mt-2">
                    <div className="p-2 ml-2">
                      <div className="font-bold text-pink-600 dark:text-gray-300"> Mutant Ape Yacht Club </div>
                      <div className="text-sm text-gray-400">Added 29 Aug 2021</div>
                      <div className="text-sm text-gray-400">Owners: 6964</div>
                      <div className="text-sm text-gray-400">Total Volume: 36,880.98 ETH</div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-3 mr-3" style={{maxWidth: "3rem"}}><img src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120" loading="lazy" className="w-16 h-auto rounded-full"/></div>
                  </div>
                  <div className="p-4 pt-2 text-sm notes dark:text-gray-300">
                    <p>The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-4 ml-4 overflow-hidden border border-gray-300 rounded-lg shadow-md bgCard dark:border-gray-800">
              <div className="w-72">
                <a href="/bullseum" className="">
                  <div className="relative w-full overflow-hidden" style={{height: "220px"}}>
                    <img src="https://lh3.googleusercontent.com/Z_Xo71TEmUDe5ibW02HidbtauOqrlE_Sf6xCCWx0PmHfcg5wU980box7WigDA_56AGgSoJd9FEzQ5AXyiu5l6BQJqxB-AMuxjanqjg=s2500" className="object-cover object-center w-full h-full"/></div>
                  <div className="flex flex-row mt-2">
                    <div className="p-2 ml-2">
                      <div className="font-bold text-pink-600 dark:text-gray-300"> BULLSEUM </div>
                      <div className="text-sm text-gray-400">Added 29 Aug 2021</div>
                      <div className="text-sm text-gray-400">Owners: 1621</div>
                      <div className="text-sm text-gray-400">Total Volume: 133.22 ETH</div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-3 mr-3" style={{maxWidth: "3rem"}}><img src="https://lh3.googleusercontent.com/T0tIL2Jdm9g0OnykWf6cvblvieSHOOBVnj4oJqJiMjpF9KDrVsdzI6TdMwl8JEPGIA2cgc77k7NXLKXJ0P57xTyYPGIUddnWVRbC=s120" loading="lazy" className="w-16 h-auto rounded-full"/></div>
                  </div>
                  <div className="p-4 pt-2 text-sm notes dark:text-gray-300">
                    <p>The most valuable art collection of this civilization is kept in a museum called Bullseum. This NFT collection owns a total of 5,000 unique bulls. You can see more at <a href="http://www.bullseum.io">www.bullseum.io</a></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-4 ml-4 overflow-hidden border border-gray-300 rounded-lg shadow-md bgCard dark:border-gray-800">
              <div className="w-72">
                <a href="/zalesi" className="">
                  <div className="relative w-full overflow-hidden" style={{height: "220px"}}>
                    <img src="https://lh3.googleusercontent.com/J9sRFquecIeGzGIbDgDjYSbg0zHUnC76ok2ajzLcpvTzaLPxIAyj6gBOahPhc5gaTm-PlXmb8HIHvxYCJvKLI_okAdNQA86_g7e28A=s2500" className="object-cover object-center w-full h-full"/></div>
                  <div className="flex flex-row mt-2">
                    <div className="p-2 ml-2">
                      <div className="font-bold text-pink-600 dark:text-gray-300"> Zales I </div>
                      <div className="text-sm text-gray-400">Added 29 Aug 2021</div>
                      <div className="text-sm text-gray-400">Owners: 302</div>
                      <div className="text-sm text-gray-400">Total Volume: 14.46 ETH</div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-3 mr-3" style={{maxWidth: "3rem"}}><img src="https://lh3.googleusercontent.com/KAKYV_Yd51Em4GSwnAfa6GvLhmtuvH3S8YwTBe7pCxd1Dhr_EXmhO9zXCPEq3LuJLS5prkXvMy3OJVe8YgHkXzR67CARZsaGdypPxw=s120" loading="lazy" className="w-16 h-auto rounded-full"/></div>
                  </div>
                  <div className="p-4 pt-2 text-sm notes dark:text-gray-300">
                    <p>Zales Chapter I is 9,999 art pieces of 10 different kinds of fish in total.</p>
                    <p>It will be minted as different patches, which we will call “waves”. Each wave will open a different number of Zales NFTs, which have the potential to be minted, and have a...</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="px-8 pb-2 text-3xl font-extrabold text-center textColor700 lg:mb-0 lg:text-left">Top Collections</h1>
          <div className="mx-4 mb-2 border-b borderLine"></div>
          <div className="flex flex-row flex-wrap justify-center px-4 lg:justify-start">
            <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
              <h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        Top by 7 Day Volume
      </h2>
              <div>
                <a href="/cryptopunks" aria-current="page" className="nuxt-link-exact-active nuxt-link-active">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
                    <div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
                      <div className="text-sm font-bold text-gray-400">125,907.98 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/boredapeyachtclub" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
                    <div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">42,437.6 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/mutant-ape-yacht-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
                    <div><img src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Mutant Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">36,847.07 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/0n1-force" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
                    <div><img src="https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> 0N1 Force </div>
                      <div className="text-sm font-bold text-gray-400">24,944.21 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cool-cats-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
                    <div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
                      <div className="text-sm font-bold text-gray-400">10,047.94 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/koala-intelligence-agency" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
                    <div><img src="https://lh3.googleusercontent.com/gijDy2wxWJZW93J7s556uAxfQq5yuEOR4Z8u4SQS2ZOZoRkxIIBSD8hBCEP-XFRlLwlVg8Mr0IpjowF_n7HaMFSi1ByBK9ZMiL3Cqw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Koala Intelligence Agency </div>
                      <div className="text-sm font-bold text-gray-400">9,016.29 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/meebits" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
                    <div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
                      <div className="text-sm font-bold text-gray-400">8,884.44 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/pudgypenguins" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
                    <div><img src="https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Pudgy Penguins </div>
                      <div className="text-sm font-bold text-gray-400">7,338.91 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/bored-ape-kennel-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
                    <div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
                      <div className="text-sm font-bold text-gray-400">7,295.67 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/world-of-women-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
                    <div><img src="https://lh3.googleusercontent.com/I68L-_MThK4yUXXnUGnNJQBuAtu5w66mg-57ZzKOYDDVI6Y4-XbdMt3SbuVaEymUkoIgv9BdrNa1cbQPPaJKRgaEM9JqpywS-rW4KQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> World of Women </div>
                      <div className="text-sm font-bold text-gray-400">6,417.67 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/mooncats" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#11</div>
                    <div><img src="https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> MoonCats </div>
                      <div className="text-sm font-bold text-gray-400">4,306.02 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/wicked-ape-bone-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#12</div>
                    <div><img src="https://lh3.googleusercontent.com/tvYjywXx6zk27pE946CFtz_DJsfTyGx7qOLUiCI9-FZ9XKLQ5-4UEjsvZThJrnirzPo-kVLWG6C6g3cLZUMmQfwPt2rwk5XvTIB0TQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Wicked Ape Bone Club </div>
                      <div className="text-sm font-bold text-gray-400">2,740.99 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/supducks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#13</div>
                    <div><img src="https://lh3.googleusercontent.com/WNd3NNCiOAkD3rUNCau9qXDPQsnH3ZA8PcDMhlsfLnK6J1vSNpJnPFCjA-_l03LbCxwAYC1Mj8IcRQch7YMTDLnn_c-jAQ03RWRdEw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> SupDucks </div>
                      <div className="text-sm font-bold text-gray-400">2,563.03 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/veefriends" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#14</div>
                    <div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
                      <div className="text-sm font-bold text-gray-400">2,340.66 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/guttercatgang" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#15</div>
                    <div><img src="https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Cat Gang </div>
                      <div className="text-sm font-bold text-gray-400">2,252.23 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/ready-player-cat-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#16</div>
                    <div><img src="https://lh3.googleusercontent.com/CKnfM8FTn_30ZWM-QoO19HPfYa8KYQrYhojjNr-RyKDm-HOxiRCICg1RgvFRwZjE6RXO7WhAnICgcXOhkWYHghAwPKIEuL3iCUT9JIQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Ready Player Cat NFT </div>
                      <div className="text-sm font-bold text-gray-400">2,092.63 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/thekillaz" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#17</div>
                    <div><img src="https://lh3.googleusercontent.com/Y7kPiyRI39EkZz8Bhp1_-QAVyjcih5jz7x-2VBwOHnHnmoEk5DeVju_o9001FbF2sBkMwiwVUfZTLwkBosPiguNl9FZlF_XDYmTe=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> The KILLAZ </div>
                      <div className="text-sm font-bold text-gray-400">1,881.59 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/lazy-lions" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#18</div>
                    <div><img src="https://lh3.googleusercontent.com/00QNYijFp4OyA0yYz74w8_8kpBSeByKz4BrntvvKU-rzqXdBHSgLmLlFrD-D39AJHdla9o5nqVi7BKpEuFO6f5ow9AiZX26WWZFVdA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Lazy Lions </div>
                      <div className="text-sm font-bold text-gray-400">1,709.86 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cyberkongz" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#19</div>
                    <div><img src="https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CyberKongz </div>
                      <div className="text-sm font-bold text-gray-400">1,695.49 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/bastard-gan-punks-v2" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#20</div>
                    <div><img src="https://lh3.googleusercontent.com/-_j_RMVSqfDvPfRJhF3BQaf6D3OD31sG6d5pszei8a5V31EKr4Jz11xk-0iAnG4vTKwvhNPx2ICn4r25tbEtQ36EYJRdxlczuppUwg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> BASTARD GAN PUNKS V2 </div>
                      <div className="text-sm font-bold text-gray-400">1,680.06 ETH</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
              <h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        Top by Total Volume
      </h2>
              <div>
                <a href="/cryptopunks" aria-current="page" className="nuxt-link-exact-active nuxt-link-active">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
                    <div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
                      <div className="text-sm font-bold text-gray-400">454,834.04 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/boredapeyachtclub" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
                    <div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">128,043.11 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/meebits" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
                    <div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
                      <div className="text-sm font-bold text-gray-400">53,283.63 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/mutant-ape-yacht-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
                    <div><img src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Mutant Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">36,880.98 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/0n1-force" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
                    <div><img src="https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> 0N1 Force </div>
                      <div className="text-sm font-bold text-gray-400">34,950.42 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/hashmasks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
                    <div><img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Hashmasks </div>
                      <div className="text-sm font-bold text-gray-400">34,492.83 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/pudgypenguins" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
                    <div><img src="https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Pudgy Penguins </div>
                      <div className="text-sm font-bold text-gray-400">30,349.21 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/bored-ape-kennel-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
                    <div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
                      <div className="text-sm font-bold text-gray-400">27,073.7 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cool-cats-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
                    <div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
                      <div className="text-sm font-bold text-gray-400">22,911.71 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/veefriends" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
                    <div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
                      <div className="text-sm font-bold text-gray-400">16,942.12 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/axie" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#11</div>
                    <div><img src="https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Axie Origins </div>
                      <div className="text-sm font-bold text-gray-400">15,416.31 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/world-of-women-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#12</div>
                    <div><img src="https://lh3.googleusercontent.com/I68L-_MThK4yUXXnUGnNJQBuAtu5w66mg-57ZzKOYDDVI6Y4-XbdMt3SbuVaEymUkoIgv9BdrNa1cbQPPaJKRgaEM9JqpywS-rW4KQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> World of Women </div>
                      <div className="text-sm font-bold text-gray-400">14,023.45 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/guttercatgang" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#13</div>
                    <div><img src="https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Cat Gang </div>
                      <div className="text-sm font-bold text-gray-400">10,732.8 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/fluf-world" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#14</div>
                    <div><img src="https://lh3.googleusercontent.com/6A_zAw2qtq91-5x8yuJUwuV6ttgD2G__RWVApFWfUcH8Qb8oLhW3uP9MkonFAaHRnE4XodwYHCgESxQ3xdQlQrjTros61gPaG3qf2nQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> FLUF World </div>
                      <div className="text-sm font-bold text-gray-400">10,400.46 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cyberkongz-vx" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#15</div>
                    <div><img src="https://lh3.googleusercontent.com/vpJFZRfBl9ghj9IinaDB3w3xScD9AHwuXxpId50Yo80bw1Tt1BOhJg5pltBN-_wJwA0aCyHbcxIbXNnQ1cKd9xlc5ATdJUL4Yy3kDQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CyberKongz VX </div>
                      <div className="text-sm font-bold text-gray-400">10,052.12 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cyberkongz" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#16</div>
                    <div><img src="https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CyberKongz </div>
                      <div className="text-sm font-bold text-gray-400">9,606.34 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/koala-intelligence-agency" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#17</div>
                    <div><img src="https://lh3.googleusercontent.com/gijDy2wxWJZW93J7s556uAxfQq5yuEOR4Z8u4SQS2ZOZoRkxIIBSD8hBCEP-XFRlLwlVg8Mr0IpjowF_n7HaMFSi1ByBK9ZMiL3Cqw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Koala Intelligence Agency </div>
                      <div className="text-sm font-bold text-gray-400">9,017.45 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/animetas" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#18</div>
                    <div><img src="https://lh3.googleusercontent.com/Cc3FG95r-fF8YJVYJ3OkTFCE8jLIY5yECF0Tlum7DckaYC2ZA8hKvm_eD3siPrQS8LoYpUccjbnYCXm_Cj7myBgeAbUwCnJ5XSGf7Ws=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Animetas </div>
                      <div className="text-sm font-bold text-gray-400">8,044.42 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/mooncats" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#19</div>
                    <div><img src="https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> MoonCats </div>
                      <div className="text-sm font-bold text-gray-400">7,593.77 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/vogu" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#20</div>
                    <div><img src="https://lh3.googleusercontent.com/4kPtQ8iep2Sw8MEV8TLfGuDsX0ql5pfniHZZGpwx3jp9D2ZRCE0coFxagGrhFH0sfVUezN1O-aRy9SZDong-N0RNsHgCg2rvX7LSJw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Vogu Collective </div>
                      <div className="text-sm font-bold text-gray-400">7,272.72 ETH</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
              <h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        Top by 7 Day Average Price
      </h2>
              <div>
                <a href="/cryptopunks" aria-current="page" className="nuxt-link-exact-active nuxt-link-active">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
                    <div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
                      <div className="text-sm font-bold text-gray-400">109.58 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/boredapeyachtclub" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
                    <div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">47.05 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/axie" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
                    <div><img src="https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Axie Origins </div>
                      <div className="text-sm font-bold text-gray-400">16.39 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/veefriends" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
                    <div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
                      <div className="text-sm font-bold text-gray-400">11.25 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cyberkongz" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
                    <div><img src="https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CyberKongz </div>
                      <div className="text-sm font-bold text-gray-400">9.47 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/thedudes" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
                    <div><img src="https://lh3.googleusercontent.com/mxx80GXQVlEfsHRkKrYWxLeFXBWhQd1PyaPyLADxH1mJlAYL4OVwbZ0vqxOofjUsTlz2wom208kCGXdmL_fzwY_9ltu1YS5HuuPSa44=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> thedudes </div>
                      <div className="text-sm font-bold text-gray-400">8.46 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/mutant-ape-yacht-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
                    <div><img src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Mutant Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">7.26 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/guttercatgang" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
                    <div><img src="https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Cat Gang </div>
                      <div className="text-sm font-bold text-gray-400">7.06 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/0n1-force" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
                    <div><img src="https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> 0N1 Force </div>
                      <div className="text-sm font-bold text-gray-400">6.17 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/meebits" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
                    <div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
                      <div className="text-sm font-bold text-gray-400">6.08 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/bored-ape-kennel-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#11</div>
                    <div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
                      <div className="text-sm font-bold text-gray-400">4.52 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/cool-cats-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#12</div>
                    <div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
                      <div className="text-sm font-bold text-gray-400">4.51 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/pudgypenguins" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#13</div>
                    <div><img src="https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Pudgy Penguins </div>
                      <div className="text-sm font-bold text-gray-400">3.62 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/chiptopunksnft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#14</div>
                    <div><img src="https://lh3.googleusercontent.com/TtBoKb-Qp6exyyOJr8IFE3vn28L10qdR2qnyL0o4laF1yeenlIXOBHY7aF_4QwNzdTY781XjWtSk2RsH6gqbXUvlgTtc1G9oBE2T=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Chiptopunks NFT </div>
                      <div className="text-sm font-bold text-gray-400">3.26 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/fast-food-punks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#15</div>
                    <div><img src="https://lh3.googleusercontent.com/SIwsJXHU7ZstQVl5i4isZFp60NutUL74Jf24j9YfpFVaUstRDTTgJdqqwk3K_A-MRO2N6wbyUH9tUorFlQ_WUuTNU7A6HJLGjtbQGQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Fast Food Punks </div>
                      <div className="text-sm font-bold text-gray-400">3.14 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/fvck-crystal" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#16</div>
                    <div><img src="https://lh3.googleusercontent.com/UiZmYgnMO_AEn8cQmUSOcqCT1mP4XF7zupkJpQtwNS3rMCzJlGsQH1I22tsUWvkDqCYISpIEHGuKzibepZIYLVNRDBAFigyivmA34cI=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> FVCK_CRYSTAL// </div>
                      <div className="text-sm font-bold text-gray-400">2.9 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/dystopunks-v2" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#17</div>
                    <div><img src="https://lh3.googleusercontent.com/PLYU9yiTsBDKaCm84jqVS-CEh3k8Cc1b_--I31nB9TDWOuQWVLsnQsgcBGjbeVlAe-wvRAefW2R5Hxe7VoWFudKJPMa1OstQKFH0Kg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> DystoPunks V2 </div>
                      <div className="text-sm font-bold text-gray-400">2.69 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/world-of-women-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#18</div>
                    <div><img src="https://lh3.googleusercontent.com/I68L-_MThK4yUXXnUGnNJQBuAtu5w66mg-57ZzKOYDDVI6Y4-XbdMt3SbuVaEymUkoIgv9BdrNa1cbQPPaJKRgaEM9JqpywS-rW4KQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> World of Women </div>
                      <div className="text-sm font-bold text-gray-400">2.6 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/gutterrats" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#19</div>
                    <div><img src="https://lh3.googleusercontent.com/Xz4jA8j-PDDJK_THGjYhEire5ZsE4dXKZSMqxW5Dut0H-mgNiEasEm6-C4EnwVhZ5J9WHqBG9zT14gF7XnlGjMBqzhP66UmZq7V_AQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Rats </div>
                      <div className="text-sm font-bold text-gray-400">2.4 ETH</div>
                    </div>
                  </div>
                </a>
                <a href="/hashmasks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#20</div>
                    <div><img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Hashmasks </div>
                      <div className="text-sm font-bold text-gray-400">2.21 ETH</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
              <h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        Top by Owner Count
      </h2>
              <div>
                <a href="/cryptotrunks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
                    <div><img src="https://lh3.googleusercontent.com/oZ3rNvsIZGyj_BInkVOQotVWjoToROEwBEOAKOiElByQcV_zHqYUE61Nds2g_s1rg0vEjSV_ADix8jForAya5zZPtWnamJNcdBWWcA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoTrunks </div>
                      <div className="text-sm font-bold text-gray-400">11720 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/mutant-ape-yacht-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
                    <div><img src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Mutant Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">6964 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/bones-and-bananas" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
                    <div><img src="https://lh3.googleusercontent.com/o-esn2NgDf-AJ8VDsadqiUcvn47LxGRgrXCOAU_UgH1QVHomFp-yccOBcG3Jh8g6LsENM_supYtovgOUwbIeYbHiABb1Or5qJbxZEw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bones &amp, Bananas </div>
                      <div className="text-sm font-bold text-gray-400">6828 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/boredapeyachtclub" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
                    <div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
                      <div className="text-sm font-bold text-gray-400">5350 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/meebits" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
                    <div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
                      <div className="text-sm font-bold text-gray-400">5121 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/hashmasks" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
                    <div><img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Hashmasks </div>
                      <div className="text-sm font-bold text-gray-400">4786 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/veefriends" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
                    <div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
                      <div className="text-sm font-bold text-gray-400">4647 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/bored-ape-kennel-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
                    <div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
                      <div className="text-sm font-bold text-gray-400">4647 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/pudgypenguins" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
                    <div><img src="https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Pudgy Penguins </div>
                      <div className="text-sm font-bold text-gray-400">4558 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/koala-intelligence-agency" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
                    <div><img src="https://lh3.googleusercontent.com/gijDy2wxWJZW93J7s556uAxfQq5yuEOR4Z8u4SQS2ZOZoRkxIIBSD8hBCEP-XFRlLwlVg8Mr0IpjowF_n7HaMFSi1ByBK9ZMiL3Cqw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Koala Intelligence Agency </div>
                      <div className="text-sm font-bold text-gray-400">4507 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/cool-cats-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#11</div>
                    <div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
                      <div className="text-sm font-bold text-gray-400">4409 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/avastar" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#12</div>
                    <div><img src="https://lh3.googleusercontent.com/nqAH3M0pky9XgNVA5p2rCplmpNX-K3F2aH1CMQ9i30ILpTklFW-lAhbMMXdDOQvLynbQqh883ivRwAjbz7_-59Jo=s60" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Avastars </div>
                      <div className="text-sm font-bold text-gray-400">4326 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/thewickedcraniums" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#13</div>
                    <div><img src="https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Wicked Craniums </div>
                      <div className="text-sm font-bold text-gray-400">4298 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/wicked-ape-bone-club" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#14</div>
                    <div><img src="https://lh3.googleusercontent.com/tvYjywXx6zk27pE946CFtz_DJsfTyGx7qOLUiCI9-FZ9XKLQ5-4UEjsvZThJrnirzPo-kVLWG6C6g3cLZUMmQfwPt2rwk5XvTIB0TQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Wicked Ape Bone Club </div>
                      <div className="text-sm font-bold text-gray-400">4250 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/blockchainbikers" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#15</div>
                    <div><img src="https://lh3.googleusercontent.com/sD4kKN2TG7JO4DNg4e8WK13lBkr9xa9wTBrBXchNXsCmd2NlBnZiMT9u4zaQ_OzmVeElw3XikRvYyxE2JCiaX5UMi6VBw6MT2ejN64o=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> BlockchainBikers </div>
                      <div className="text-sm font-bold text-gray-400">4189 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/mooncats" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#16</div>
                    <div><img src="https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> MoonCats </div>
                      <div className="text-sm font-bold text-gray-400">4117 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/world-of-women-nft" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#17</div>
                    <div><img src="https://lh3.googleusercontent.com/I68L-_MThK4yUXXnUGnNJQBuAtu5w66mg-57ZzKOYDDVI6Y4-XbdMt3SbuVaEymUkoIgv9BdrNa1cbQPPaJKRgaEM9JqpywS-rW4KQ=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> World of Women </div>
                      <div className="text-sm font-bold text-gray-400">4109 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/0n1-force" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#18</div>
                    <div><img src="https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> 0N1 Force </div>
                      <div className="text-sm font-bold text-gray-400">3981 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/stoner-cats-official" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#19</div>
                    <div><img src="https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> Stoner Cats </div>
                      <div className="text-sm font-bold text-gray-400">3924 Owners</div>
                    </div>
                  </div>
                </a>
                <a href="/24px" className="">
                  <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-10 text-2xl font-bold text-right text-gray-400">#20</div>
                    <div><img src="https://lh3.googleusercontent.com/l_feLj_AM-KPJSGeoYfyPoRlCBpHJy6uwKTDHfeF7MQ5M-Irnx9IFSP6Nykh8HHfElMt5VdCd9-Da0Q_i_Uk-C0x5S2hB_SFl0xv=s120" loading="lazy" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}/></div>
                    <div>
                      <div className="text-base font-bold text-pink-600 dark:text-gray-300"> 24px </div>
                      <div className="text-sm font-bold text-gray-400">3910 Owners</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 mt-10 text-sm font-bold text-center"><a href="/terms" className="">Terms of Use</a> - <a href="https://opensea.io?ref=0x2d2193f337a4e446c14caa5c90e7b5849203acd0" target="_blank">Powered by OpenSea</a></div>
        <div className="h-40"></div>
      </div>
    </div>
    </Layout>
  )
}
