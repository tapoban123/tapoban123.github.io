'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter_bootstrap.js": "96201a5d2264ed308abe38729ca23c9e",
"index.html": "08a09d4e80700b191d62d0a3d174c57a",
"/": "08a09d4e80700b191d62d0a3d174c57a",
"version.json": "9b818ca9511483c901bed1545384376c",
"assets/assets/images/mobile_appbar_icons/tech-stack.png": "cd26016eb68d9cd2d5cb1de43002cff6",
"assets/assets/images/mobile_appbar_icons/projects.png": "37a0e6947b18a507aa7f4eff946f27d0",
"assets/assets/images/mobile_appbar_icons/contact-me.png": "0e648be85c98dc190775726e20d7f2cd",
"assets/assets/images/mobile_appbar_icons/about-me.png": "b1c8447e00f1cd51f68883b22b8a80fa",
"assets/assets/images/mobile_appbar_icons/services.png": "71d177d628bca6aff2813176cba0c18f",
"assets/assets/images/mobile_appbar_icons/services-2.png": "b9e1766a41c01803dc16024a294da74c",
"assets/assets/images/web.png": "fdff6feca26e6f410e48b5771e41f710",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin.png": "b286b20d8e9a8122d2a13caa6b795146",
"assets/assets/images/twitter.png": "5e50007c58f3521b7fd6470e6af616c6",
"assets/assets/images/twitter_qr.png": "9d3795421db28d38225dc15e8f527c82",
"assets/assets/images/insta_qr.png": "47967794573c1b5451a39af2e76eb8b9",
"assets/assets/images/linkedin_qr.png": "3d76fa6879f1cf3cd22bb77ea3478e7d",
"assets/assets/images/side-bar.png": "28a1c1a259295c02036c2a305452e791",
"assets/assets/images/my_logo.jpg": "0074550cea6eda5997d7a4d1cfc970c9",
"assets/assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/education_icon.png": "94ebcfe92beef8e8f2f9291dcf065446",
"assets/assets/images/Photo.png": "0f94fbaa53d5e17dfb7dabfa1e344880",
"assets/assets/images/side-bar-icon.png": "7777bd0a549e245607ebc0cad73cb093",
"assets/assets/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/fonts/inter/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/inter/Inter_28pt-SemiBold.ttf": "70c03908b3ab82969b38ba14745f3a54",
"assets/assets/fonts/inter/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/inter/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "030fa0f7d1a541870b7d02151eac7c47",
"assets/fonts/MaterialIcons-Regular.otf": "1937f0e432ac146f266352b5b4eb431a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "894d25e51757405cf81ea978c770b649",
"assets/AssetManifest.bin": "91f2d2eee9e62f8dec9186003fb1edd2",
"assets/AssetManifest.bin.json": "a35145ef1e66b097d09cd0d7dd1674af",
"assets/FontManifest.json": "76e7f2f2d70d951cb9255af63e2f7dfe",
"assets/NOTICES": "d110905e8a3584281e76a43682fb1de5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "8cb2d6a34d85a75e9cf0b0d6295a130f",
".git/refs/remotes/origin/main": "8cb2d6a34d85a75e9cf0b0d6295a130f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/23/e09b8dca1186f70790a1e19468bcc85226a705": "564471993c4bf0188b6e163247b9d034",
".git/objects/3f/5ee380b066d461c354a34e8aafe8d78e00d411": "feb81608804cc577012f846fd9f801b2",
".git/objects/3f/f14975b121b4c3fb917972f08cc5c67bc2ff61": "1c3a1b6c0a73d93909e21225392abcff",
".git/objects/3f/7c185a2a2efd7d37a0d8b90e8a1db5758b61ba": "d4fc7a2500b066c6f6eba9ae4f07b758",
".git/objects/b3/cdc96cb0ad4f684bd2b1530b83b4e043738cbe": "77c2ef5c794e447b5bbe80051fb2aef7",
".git/objects/81/6ffc4bba6767bff9470c46bed19c4edf64d129": "67a91a6a187af421a63fb6f0669cfe56",
".git/objects/a0/76f99b2d79985eed2afd816d0e2afc86a0a447": "00336b8c0b4ead699b3361b30812c16d",
".git/objects/ad/6745cb50eb83f1f8cdb8153f70e0de21f2b47e": "8543fc5527f3ed7deab5f56382984973",
".git/objects/ad/c9bce43d2a26dd0bc80dcadcddcdcb0028dd4f": "64f6ec5059fb4fa435a1ba31c7b5d7e1",
".git/objects/43/ed4f5ee6cb01173b448af26edb9d7459f9d365": "f186d42343e916c98435cd538a94e1b8",
".git/objects/43/ce1052544f63153221d611f08760bd152a5840": "f7a6d7a71474c2bc41ddf421154303a8",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e3/e840bed7416b286b2036781c8334d5aec8d7cb": "31be1c633820512993c6bbe89f66210b",
".git/objects/e3/eafb928299c7a34557377ea5c762349b40e813": "9b3e0dbd17eb18ae7573112f522771c0",
".git/objects/05/3185e5d299739eee7218f2e93876f0c3a5463a": "d1031cd0f181a1e34b10b17db26a2038",
".git/objects/05/6b9afc77f50ee06a6bd1e44128ef0912793c9c": "c6783ce3ec9bcf37830e4e491824c0e3",
".git/objects/05/2740a9877eac5cb8e76ad2bad96f1c6d5314c2": "b484785e23e1365e572462a180f21f40",
".git/objects/5c/88739bdf1b4aec798fb58c873483a08a538b2a": "56696b488f8365e771240915ac8ceb9e",
".git/objects/5c/aceab9530db9cc6f32522e026a9976bc338706": "0724abebe326b4ffce9147c40f8272f4",
".git/objects/ce/b8576abcbf1ef3270f6531f8f1daaf3f974f3b": "2d8e1645e4fd78080f89904666bae9bc",
".git/objects/ce/255af084287a8d38fb1f156af283b892ee3485": "92336477f07b06ce5ae088e5a777d7bb",
".git/objects/8b/84efcf8dae734db522f88ca944c855a8a5ebb7": "a0a273cf4a351d62379ae2a7aa9f833b",
".git/objects/8b/a90c517ff6dd16c9ec0a1e169f7bab5e647e21": "3c28de8fa03ee0e64c35e2171c9c2106",
".git/objects/31/550c1cf3821df20b1baabbd771cec9471b6834": "2997cba15b0f0297af6311436200dbfd",
".git/objects/89/ef2480e9c4eb8ceb5864588c382f969ebb64cd": "e7f8afc9e572e177a54f9f273add89ef",
".git/objects/89/3a8559f9f83d3f4c5ce7aa192d64d64eb85297": "4a5c4a4deac31b9bb741c4b5e5d80bad",
".git/objects/89/f649a1fcd6b712700f6b39e5faa95909c854dd": "3f7f651b9f2a7c4d2722a717f5188abb",
".git/objects/99/594dff770a96b0aca82c2a1c3b4c19e9c48285": "c20097e18e0cd2938e65515da1b5777f",
".git/objects/99/b18d188a40501a97ee03b6a6e1e121ea209d18": "191ecb167891d3ec736798b0a6eeb717",
".git/objects/99/e2cdfd3ab9359b10a16f65b21e74fe2f498b66": "4df411c09a4d1ed513a0a05a2975163d",
".git/objects/2c/052b38cdc2ac605c2c6cd8e4e2ccf8c2c278f9": "a9c97d2682e338e64e890ba5e298c00d",
".git/objects/2c/460aec85a4bf2b4b3c2c2ed1d15b22d3909faa": "0e75cef04a399e6fa666174e48992219",
".git/objects/01/7dd6f38289133285767b59023e06ef2ab84828": "3ef69fcb63f3d940f0345655bf6434d7",
".git/objects/01/7003f3a9c815a80dca182507838cd5dc6d2cb6": "cd04961c3fef0da4ef29919a96648e91",
".git/objects/01/b3ed46633a2de8ba1f675a20e5135e1aa7ada3": "ba43389ae08a6432c02b50ba82df3e7b",
".git/objects/1d/037b47f8a8ee31955e6a13fff0a39bfd3f4f83": "28a8670873263a17a815f2ac9260459b",
".git/objects/db/fdb857b2c95a696df47f305f2f6d4fffe9480d": "cf7deb3a5a5523e3eb3ef2c3bc3c9b61",
".git/objects/d0/0fc44471698c915c5967aca9d52e99627693ce": "1bb86a7c4325a1681a4d13ab3aaf2f5c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/e8a3570b93351a85bdd4988cf32aa76d838a81": "d0473ae1e2e0c9c2f2b9ca10371481ed",
".git/objects/02/0590433803235a9fa3e6b35de9ff7d960162bc": "e8fc569d05a18020c9ff30141d120754",
".git/objects/02/b8e06923cfe0ee7e26301ebae13541c6d389b6": "f56da4e05bf10372599b731d5b699a04",
".git/objects/02/9b8d48e46a7958dc484a6b3b459b3b0af1b348": "7d67a67528c1a4a64ef2abdbba927cb9",
".git/objects/02/6901d61f4d43d0f5e5ad0390bfa781b4ecd0b7": "a4963d180a7dd667c3de1deccd05cc81",
".git/objects/4d/864981d6c2c8e5ae241f07092c46ad5f989171": "83df5fe77db68215b6648cf28dc26772",
".git/objects/ff/12a939d0939c1c23e0b6c4c134e4b4bbda8c5c": "cab30759ec0fb176738d6e24c681f7f7",
".git/objects/ff/ef011038a5af3dab74cbf1a54d6af374795fc8": "cb95fee3c3dc3fe3c81c13ade8b4bdaa",
".git/objects/15/881da4f8a81b1f4f2f460b182bda4c2dcd7024": "111a4fae4bc2e293180a2d91a74f6f06",
".git/objects/be/96e095a9223ddf285a2f5a2e190be4ba464f40": "5fea8969a51664b0bedb396049f6d109",
".git/objects/ef/9f02ff2e9332f2b41ff7cfb3ac7086462d1497": "2c12f08121eb7fdd69b6b84c823a618b",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/9d/9cfd2fa4e73d8080712ae57be92867339efb47": "ff591436c24be7f2b1301f1d6e9127a6",
".git/objects/9d/7351a49a07357a48f2da7bf1404c3eeb8255a5": "7971f0c437c86ffc9b6cf860c83ec93c",
".git/objects/9d/9737cc07733c186230b1f1020d27687e3df5d9": "93504d71858493e59426ff4097de0d58",
".git/objects/9d/9483424727bcd9e604a7e4dc12865ab604c779": "b50e369f8d5081cd12b99db3083a7673",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/2f/2d6b6138f62436b5a36af1d40cd10b2d56748a": "1a0ad287489ee321bf65ecf16766a3f7",
".git/objects/2f/ec9391ab43ab707f964afef238b80e4280e0df": "d3dafce68c1cc760c8ea65572f5da1e6",
".git/objects/33/2de3104e589fbae08d5c10b72933f313c28d29": "7dd2b0ede64c5d9db91c760d451d2993",
".git/objects/86/32d930d8e329d9a4ddeee3a4766010af7e5efb": "a7a600fdf311f04ee459907be6d8a213",
".git/objects/07/92431abb886fbcd2286c20531b67d8581ba75e": "531a298dd0e4ca3ddfe0e1934d41b07c",
".git/objects/07/bbb920f4dc720aece32563d6822a4b3bed94f1": "baa9d11c935efd711d5a412482cab53e",
".git/objects/1a/66b10bab06bc87eb8d5666b4ecf2520a0806dc": "5318f25a2e8a649d5f45742450d74e2a",
".git/objects/de/b967b629131ca98530ef95f6f7c2cdfe4103fa": "e208c55194376c638534796fc2602888",
".git/objects/de/be5c1b8680793fa34d755be10fec6f71415faf": "9cfa9e63e09bcf209de0ee800de038c8",
".git/objects/d3/e06ee6140238b9a9bcdc9acb4b3b051303a1a6": "245be506a357051ca3a086f0de5f43c5",
".git/objects/66/823f1f8cad6267d2170310f96b37beac6a880d": "b8be0d3d81b04141af530713f1c65d98",
".git/objects/66/dce70459f189dff2e2877f7e4108ef61e5409c": "5ac086a8b796d7ba0a1a1c04abf4e089",
".git/objects/66/afb8c3a3528814f03b8609a0a080106d100b9a": "980530a76d70d431186e55cd82d37703",
".git/objects/66/06004f5da6ae03154be1f7fe8ba998c0f09979": "86bddad0b362a6b59f0ae6204400dc9c",
".git/objects/2a/a8fd6dc9c4f19c4d993f21401afc3b44bfeaf8": "8c631d9cfe91671094c2321686eea5ce",
".git/objects/2a/da46b0be82c45de03e0286444f44cab6f23e77": "45fd293ae83a4a84081a6feea42d131b",
".git/objects/cc/a8068f7016374dfa7938eff8b2c5121673d7fe": "18ede5db8671f6e023c10c6da9fbad98",
".git/objects/4e/b23ef462d0a0c5c4031c667353eb4c9120babb": "66bf2a6e501b8a3391aca271067c1c1c",
".git/objects/4e/d7d0e843d49ca7e18a5a1977c0da901f2742ce": "9df62ede66b16c184a0ea5577fc8c54d",
".git/objects/c1/5f68434246c57e06648c2d805036ee3e33f9b2": "854c8222951f454a5e9466c7f0319d1b",
".git/objects/c1/73cd1a97dfa334c4aadef2cf5a721f98bacc3d": "5eb51679fe881fa9f4157545751d5ec5",
".git/objects/c0/33728221ecd0484b81ecd9dd320dc0c7f62678": "98a92d900e2b81e0148a6824bd0067e1",
".git/objects/f0/b07f53f7d0424213e32faf1c926d35469bc472": "cb6b9851133e31ddaa0be3d394734a50",
".git/objects/44/e39c4fd28c85fff63446966688e4951860a114": "6e917173edbfd9c21696ce2dc9e77670",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/bc/87c06da26124f32978eb7dc4dc19f1df30236d": "bdedd20ce749c0871ca51698cb39bc21",
".git/objects/c8/5b76e7f032b0bceb04aec22979108d98105615": "5dea73dd2c3d69e7217dbf9c18d371f1",
".git/objects/75/74ac5c6e71bbbca5eeb112fe2ca4aa808edbd4": "bf76f93d333b307b0772c50eb80afa29",
".git/objects/9f/04c2a2faa8943bd888bc7a98404ed6b37ee8db": "e07dff5f482d20210dce8158c018bad5",
".git/objects/9c/54bad5f6d16b3db3db076d9ee7a3381de43fd0": "6bd1b8e550b8fdc6ab4ee8d4ce2a72e8",
".git/objects/9c/51d347331610c6ff1bcaf960d1a15c099d7ccd": "db4170e840d912380a3653a70d512df0",
".git/objects/9c/7e6a2d5ba68f62f23f15b15502a941dc75775f": "2f8d38c3bd766b0b5489baef941edd16",
".git/objects/03/4d732205a705ea0ec81aeb7ab6ee0d4fbce32b": "e2021252327761008c0ec8a40620a883",
".git/objects/03/caf7c0e9cda55dda5b7a306a324599c1fdcf15": "4465b3a927947eef61b535da30ec9f2d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/b0d500c60411df4d509feab66f0c7b90cdacc5": "ae985b179751b0009b73c4545ca9dfed",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/834e1a541c1501d3a64b9c55a7da659b3c9906": "0a96915991c6f583527daacaecb56257",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/c7f37d9d58ef9a426e0131cdfd07bd4fe185b2": "4088e3e42de2b24a52190cf87db0d875",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/1e18c1e77cadcbc716f0ae134b2411bbf6a55c": "54ba429e3a70d51383f7623a80048767",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/fe46e2187407dca7572bf48680d1770af8acf9": "3f7e9834782398100b9b530365cbb4e9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5de85c3083197ff5206a8126a8a6edec5ed8f1": "379129ca25adf7e871b3460b35c828a4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/4ef40ea777052d15bc6e8b45b2949cdf0eb332": "32cf8d4a18d9ae93bd3c04312940a3bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f2eca79b813c6f23e895f1ed899de53b3358ae": "80972aa89c48095b46b4a4590bd03002",
".git/objects/8a/9e2cd2ef662f2144ef468d36f5233bfee6f8b7": "27f2070d54ef65b3919485eae83cdbf9",
".git/objects/8a/53582e65de2ee10272276239cd984787f02a9d": "9b28a1199532a6cb0687a5e4ab18f55c",
".git/objects/a6/0a6b21d81be63a0e63dafabcef75fa5feb7907": "0836e1114ef317172295287515b60003",
".git/objects/a6/8f39cab9a38a0a13cfa2ddd6f27b94aa5c2363": "b5924653804a91e68582c9e7e0d32956",
".git/objects/a6/4bb0e8e050b05aea8ee834e825e0cc9d1ec49b": "d2b6b0020e0f5fe2842cb8fa2037e232",
".git/objects/d1/03707802a6d8b9f6d5a422bb27ed0aad0a86ce": "61a7a44ef941f4cd6780325c6699bdb8",
".git/objects/d1/b380b8b00aaa93af2717bff7c9da16d1bb7a5d": "cdd0151155cd6552188afc9d34916918",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9d3fcd30d6207bf6a33bc66ddf5bbc28a6f960": "47ebd68fb7b6fda3838ecd8e6e7961d3",
".git/objects/b7/d1c6e3b93a2234c4d6bb5bc8894895c7046c2d": "a2a7f2dc4cf93495a039ab0104e68c42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/13/0a546329ff5f06af21026a048937add3c2b3ed": "d1f802f5fa1dd8305b521f8cc5147dd7",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/85/0a33035fa7b13736d4cd2610cb1e01d7050c9b": "09c01fdfdcaebe5f8bf4958cc2b1490d",
".git/objects/85/594bbae1656813274806ada6eac642b0ecd8fc": "03b8307559a33468adee49cc328caad4",
".git/objects/a3/6ad827edcd6d6eb5b09cebb77388ce4d71daf9": "54ecd32f6eb24c692eb044dae149fad4",
".git/objects/a3/50a9fc58bba61749d8f70333bf04a379d6c225": "8f8ec13e3f28e32c7edbb16e6d7ae50a",
".git/objects/8d/d831daaf8c62cba7c1241973fd4b205f00978a": "21eefeaa3e4013d72889b913f18a96bc",
".git/objects/fe/fc70adb4c2b5637c1200acd3c15a1e9f620a76": "9337c98efa2d520bfbfcf759697838ec",
".git/objects/6a/9aceed905b049394c8e85bbc28e14011825309": "f521da505ae4e9d9c81336377609c341",
".git/objects/6a/bbe51771a5a3e87f4e65d57f76b709d3fda2e1": "2c52bb757db8559ef1131cfca60b0c30",
".git/objects/c4/8da91b0fcc0c2adb6ed62fbf07b981158f33ef": "5ec018caa26bc625b82aa233a39550f9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/e52f1113b35dcbcba38d2a4887b15e50fa56f2": "70875820ef0bf004436a1278aad60e21",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/0e/99d5574109c5aaccd0fd5153138d2afcdb7126": "fc7aa52de55f86cab835f34aadde266b",
".git/objects/0e/337f585b5a9aa1ca63708411cb93ebaa954115": "10dcb9492a469652163a066fc3671d18",
".git/objects/bb/20715e2aeadf590f457a636f749b622be92764": "4fe9095d18b78b533e96e8f11d39b523",
".git/objects/53/6d0fac83108b94ade60d8cd03ab9a5c053cdf7": "51b7b0660aa446f6bf0c442e981d7020",
".git/objects/53/d3f829511c96c5b13143f2f2c09d285e9eba0d": "962365039bf8376c1ddec216c2c92a7f",
".git/objects/25/d894829c0478088ede9381efec561423548ea9": "bbac5140c685138fe92ef99e061b6882",
".git/objects/c7/6ab32255dace8bb6d84a18518f71c2852fe262": "79b3968c86568c5609ffbce0905f0e7f",
".git/objects/30/292133169be24167f55143a816ccf2e944188f": "e48ccfb54acc87154054a49bca808c1b",
".git/objects/49/ba03e94599a31291e1dbfacf9256a81d80ed4f": "3dbd5d20e0c2d844d86bb800d154cc0e",
".git/objects/49/36137f0cf9b8f8a6c09e023c4f1343cceff1b3": "1c9ff152db2cd30031d1d95629f0913c",
".git/objects/49/ff49e152d03c48fcdc6696432ceb1d31816fa8": "4977a41cb98fe9ca28b576dd143c37c5",
".git/objects/bd/207818188cc06e3042f6786eac3ead3dd42c6d": "f22ead9287a72f1ef07cc648dce83827",
".git/objects/70/c70f38ff8319cd415fc7e08e26cf0a857c1af3": "581a97ed2a65720bb959682da414878c",
".git/objects/3c/299fa0e4821841b45f0ddea9861f5feb967515": "b8805ff1accf0f2414c183fdf6cce0e4",
".git/objects/1c/74a72b5ddfc963dbe3cf6fc3c6c985c97c472a": "00347fb4ccddd75d43af86c79df1226e",
".git/objects/fd/6f53459aa5b6180b14f5d200a22423915e8b13": "9976568e6712ad124eff0e48623eefa1",
".git/objects/fd/b6ae1917163369657d03f15984862d747b7bfd": "4a8f0cb672d62f8800e7be03964bff59",
".git/objects/55/8759d45831f10724038bce325b4f449ce9d330": "3dbe2cef1160dc8e0a98eb6947daf455",
".git/objects/5d/b55cc0a0065af4017063a389e26b6955af33ba": "10b9938820561c5bc7c0746bbf86651a",
".git/objects/f1/8ad20a89db05149b038b1d90a0da0478256199": "60c16fa498e2e91768baff7abac32778",
".git/objects/f3/3e82aaf5430722d2ffae9d9087970185b2a89e": "1f43a0064207fe27e27f35a40a5c9a70",
".git/objects/67/5a74393c6130aab92e4941b62a1d8d9aa1bce3": "15019f6140b5879f8153b5b46f6b424f",
".git/objects/62/d096627f6725e656c9480237606151d15ce92b": "ecb23dd465c01c70d91fb4cb5621f3d7",
".git/objects/28/4f087c1de8de1e4b2b3c6937eb260e7d6bae8c": "d9671b03eae615b00b37766634a945df",
".git/objects/c9/2021e468b6cd058dc11428968ffb9bba1a1f0f": "cbfb1d5f5446d177007c39e3422916a0",
".git/objects/f4/aca9913e9074fd0af53b8b2ab45cde20dc7ec5": "6a52f8c15260d9374a6915627cf08684",
".git/objects/f4/31d5c6412dfdf8555a857dd05d2f544e5e67cb": "12613ab02fdf74fa05ef54c72fc89ec2",
".git/objects/51/ea9f922ca88b6d9fb8a996b68de1c2e944f2f7": "3980b7b0405da608666150d3c91f7bd3",
".git/objects/51/a0f45c5aa260a87aa1d3bfc2eeedc85f53e83c": "07f71fd39b4955b5e3c773d1d7a5c0be",
".git/objects/3d/3e7a7b9880a28c22e881520f827b59bad482af": "ba51fe7196dbd211d6165265458e72c8",
".git/objects/3d/18db22dddeca3b76dfef3fb9fe7c5d0b49400e": "e5f91f0f529da39b45a2f983a47f73b9",
".git/objects/ec/ccaa7d3e0d3f5708408e83d2c149b2386d29de": "841bf3e26c3530917741256ca9bd4bf5",
".git/objects/a1/ce1c0e45d2139d3a4e4af09d6316b5f5d58edd": "2ddb3e30173e5df6c3d01332a5d9eb2d",
".git/objects/a7/8da09c1ff9e87400b1568f85cd3f57a7e4e5f1": "79aec219f3e0aee721cf43fab27f4b3e",
".git/objects/1e/c29f3f95a328d3e9016f7f3ff5d0c2b059970f": "bc9aae58ec8a64104b01a62fbc8581ee",
".git/objects/1e/8e6031ea5403af88538ba1d1e3f1733686fe09": "2a2f043a5db51c6065e445154d7a3b80",
".git/objects/ae/e58967db3159ad43353929011f43b577fae1ca": "9c5f696f37a7b04129498e81658395c8",
".git/objects/dd/62d1bc5a29b8c68bec254c98cd072d4fcf3a9b": "d2c5d1213201d2e5e67040f8175e3ad6",
".git/objects/dd/d8e516ac55be3374895f21d2b693fbcb866993": "56fc747d5580ce409252e459466a1b83",
".git/objects/dd/6d3d2f0a8ab0cb83e4db26826cd72bc794e9a7": "f1c0451334c796527176d8f950c25bb0",
".git/objects/78/3e5fdaf2c50c153117c9d3cb099d63f8f473de": "c4307448046a60f32cf525d4d849f282",
".git/objects/80/72b2ddb5bc8983a22a587c9d44b9a3c725d535": "550e3264726fcea42cafa7218779d203",
".git/objects/22/373bdc647c2d5ca5280b1a8179aae5f4c4ac17": "b74051e3f3c07240ed261dedd94e02b5",
".git/objects/06/162a2507879c637ad1c230ce67ff2fb0661331": "9a3b1ade8512bfbeec4ca73da474f5ab",
".git/objects/06/fc7f130cbe85618f60a362cfe3cddb1af3eaea": "da5be9af94b82cb725faccd1bf826cf1",
".git/objects/4a/43c96cf3ef1769a070f802fd2a364a39dd15a7": "66c38c266b98b59e2a6f50a6efedae63",
".git/objects/4a/3b8593a8f3cd3ce4d714e7630ddf4082bad553": "a27418e13039defb18e52c74c381a49c",
".git/objects/0b/8a3a19d0a30075f76af839add46b05563b616c": "b41cd5bd534ddd1d7469f5c54529ea6b",
".git/objects/0b/4611ffbd0587f55e70dc75558027ac27802893": "20811e58ccf6358e115bf6f81d4b239c",
".git/objects/0b/ab4e2cf92ba1ecb4c0ad575fc8444dd18682e6": "bd460c9bef4ad24274ed7845fdf22eec",
".git/objects/16/4ccf0e4d373573c936d0dbdaf07269d05e3fb4": "d2dfeb01dbe5635201bba56a1f4770c0",
".git/objects/9a/809ea1127240b7ff7eb0fee52094ca64bb8a29": "0b4f9faa97fd488d006cfb453227338f",
".git/objects/af/91d11873949f09a6bf4cd641cef00e2ef688df": "2767121aad39fc493e89c8718c8d0e1b",
".git/objects/2e/d76bb2500d2c20a35601399a98ea7c57673083": "af29e591bbfaa502bb51833c01e69dc1",
".git/objects/2e/2333f6f6fc1a86277d295ed16dd38a7b6898fd": "f7e2214a10e794bcb91de43028b64e9e",
".git/objects/2e/a778b7098fe055133182bf7b4b84e9c6693917": "0d5dc7ffcff638429b72d7bea1b35421",
".git/objects/6f/0ac27c6a663edeeeb440b269860915be1fa69a": "29468a1d6c2e4ca926cb39643a3b57e1",
".git/objects/5b/6c6ec64a0d34fae9dd42b1524addf00416cbe7": "3c20e0e74b1ddad4f5a5057f212a1b05",
".git/objects/ac/27196c5b9a5c97ebabeeb53683adfc0f1a4b96": "21a0dfc8eef230c60c03973d8439141b",
".git/objects/ea/4e693468bda8e130021ccf4491b21ae06efcdf": "5591445e2910235d30a612b856d1f8ac",
".git/objects/17/0396e46c03dc61b52ab61772377a24ba5d2b8e": "f6ddfb1a4ef6f3d9c0d3743d95e63a7c",
".git/objects/3b/5bb6cd8d7b9068edb0c5136ca50be991387b35": "71611d00627798e1258fcf57b8c302d5",
".git/objects/7a/41f222719867d49ffb6538a24634c8ad736750": "c6a9eeea25bbe6232701933f1f20fe83",
".git/objects/ca/d2478e4d8718bb022022fcc9c468054688532f": "3133f1e738993210adcdd97dd6920ab7",
".git/objects/ca/9df0d28b81c2ef360e10ac61b00b5c42894f68": "051a14a25f107787ebe66e12ce1d12ba",
".git/objects/50/0a976c2fd72867582b823a6640326d5745b049": "dd7b1a54abe7dbf8628b94a46e9071cf",
".git/objects/e5/3b386fdf8256fa4de40a6f3fb0b997225a04ea": "0e3494939b887bf2026e296370a84eff",
".git/objects/b0/e22b026f9ab3e1aa63a41a2602a289c9cb9d0a": "d5fdafff495533f9214b8ca3c7a5b65e",
".git/objects/58/629a0e08293bc5c5a4c1ce6dbda3c3c44aa240": "1f35af1e2f82faf90bc3d806ebda7b94",
".git/objects/f6/1a846439fca56a9df24bb49cb3f978a524c526": "775edb6b529401b5abf9e19c51e29bcf",
".git/objects/38/bf1a40e87d95f36aa9a57eb47c0980d8720277": "aa1fd981e71da7a2096b12cf9872e45e",
".git/objects/21/362658d8c7300571ee9254183286a71fb836aa": "c966e5882b95b61164ae0a152ed2a262",
".git/objects/65/41cb082e30b0c642b524a4142f99e060870161": "05753bf75a35bb218d9f5611b4a805c0",
".git/objects/97/d9b6b9b0d249a3abc20694d4c829864da725e8": "64b8d55eaa913e3552f0a04932ff04ef",
".git/objects/9b/e60a7c9e94157e8ca34e0f1b452b52ad156d9e": "b8e2bdb41cfac27d8e7635c30339b998",
".git/objects/5a/2aab7d052d93661da1e0a71e4d5474b3649d83": "b4560c7f32821527b63f746c825d0155",
".git/objects/5a/894987c5e15c64549a07b7be9589c34739bbc5": "f9f45574f546804418cf1eadee2eb008",
".git/objects/72/4ac138fe91c5dd97faae334c2e2049b9e213b7": "bda79aa51ac0abec7673bf58e900e837",
".git/objects/48/b61e46c2b800fc5c995f6af16ef3b7c48a95ae": "47b8d770cdca01763ba91d3d285f72fd",
".git/objects/1f/c656514be26643ecdaeacda8a3b7b7bf70e597": "8507ac8de8aa8afdc16084997b9d3f74",
".git/objects/fa/16f5ef150c3052ba75a6c03fc05ae85fc9cb3b": "78db1dab40e92a1b95085cb75d288042",
".git/objects/29/f8d42c5b322f315809021091d2df4b8a5d3237": "123aa71783193089cecf4b10037713a3",
".git/objects/df/32194e6551ecf2f88439e27c5412d0df2a29d7": "3c02899855be1ecb56fb3adf0444d2a0",
".git/objects/18/ce4eb20b0567ce90d1a47d8452d21676d6315e": "adaf6fb27a86cf9e7f78c3fdd14aba23",
".git/objects/0d/8c9c30f0102e6e3934bde1a8d40d103d59ee8c": "28b5413352300254768ce559066f5fc5",
".git/objects/0c/75ceff8bb033d75be3a0308f50bbd217b303cc": "4c8708ca64555d77f51d9489bbddad72",
".git/objects/94/846320ea7f2ead4ab92576ee5ad89933e0f959": "fac45e8228ec20c6a6e065fbdf30a192",
".git/objects/cf/a2a0afbf05e5c5739e5133549a2607ca77d73c": "77911a4b794746b88ac47c25885dce2e",
".git/objects/7c/502d022d993513bd1fe3496d95fd18aa5c8d53": "98fbc09d83bdb4d6dc60b42306d0f0ef",
".git/objects/a4/a7cee723f3befecde43d6f33d59c7ef06430fe": "81adbc6d799e83c18889565f0a53d6a2",
".git/objects/2d/60bd73eb984780f795c46b2c07a28c306eabef": "f40f500b7177fd34eb2a19c1c206cbde",
".git/objects/5e/04dfb9c8868eb319b071b720e7e0bf1a1e345c": "745aee02479fd6f5130694af2dc95a41",
".git/objects/b2/452a20e54b4f8dbdaee03e6a4942b69def7e4b": "47104f92341ba39b9d5005f79fb4208c",
".git/config": "8c3036d77dbb9120146ad59ffe9253ea",
".git/COMMIT_EDITMSG": "b0ca869857a60f34f1723dc64659597c",
".git/logs/HEAD": "327d85891535b7a629a05309406550c5",
".git/logs/refs/heads/main": "327d85891535b7a629a05309406550c5",
".git/logs/refs/remotes/origin/main": "9ec95fad5813f6b1e958bdbd39431e5f",
".git/index": "446652c8d556239e5d6b506916765430",
"google4681e7b01d740281.html": "31d96928b82fb539954d3c1409daa1a3",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "2e13919c254ecb1ad0264674d905159d",
"manifest.json": "b3100ed7ee8a16b1df639bf6a25c1719",
"flutter_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.ico": "adf9379aa44fe508ffc6cf02953a669d",
"portfolio-main-icon.png": "3bef83d8bcc7c6467d4ce1dd54de7738",
"portfolio-main-icon-rounded.png": "a62a308380123beeebd4c72c5779d500"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
