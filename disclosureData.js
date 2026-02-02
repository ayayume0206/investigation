const disclosureData = {
  // --- 事件関係者 (1〜7) ---
  "@pudding_cipher": {
    no: "1",
    name: "宮本 勇気 (28) / ぷりん",
    address: "きさらぎ町 社宅α",
    info: "会社A勤務。事件現場と同じ社宅の住人。"
  },
  "@syunn_BF": {
    no: "2",
    name: "宮本 勇気(28) / 大橋俊",
    address: "きさらぎ町 社宅α",
    info: "会社A勤務。事件現場と同じ社宅の住人。被害者を追跡するような投稿が複数あるが、実際の真偽は不明。"
  },

  // ↑Aさん
  "@mihoo_pear": {
    no: "3",
    name: "高梨 美穂 (34) / 高梨美穂",
    address: "きさらぎ町 社宅α",
    info: "会社A開発部。被害者の上司。"
  },
  "@Lambda_inf": {
    no: "4",
    name: "高梨 美穂  (34) / 情報屋A【ラムダ】",
    address: "きさらぎ町 社宅α",
    info: "会社A開発部。被害者の上司。SNS上では情報屋。ネット上の噂を収集・加工してこのアカウントで販売している。被害者の周辺を独自に調査していた形跡あり。"
  },

  // ↑Cさん
  "@aka_ringo": {
    no: "5",
    name: "七瀬 朱莉 (28) / あかり",
    address: "きさらぎ町 社宅α",
    info: "本事件の被害者。オンラインゲームを趣味とする一般女性。"
  },
  "@sho_taro": {
    no: "6",
    name: "溝口 翔太郎 (37) / しょーたろー",
    address: "きさらぎ町 アパートβ",
    info: "会社Bに勤務。被害者のオンラインゲーム仲間。"
  },
  "@takagi_home": {
    no: "7",
    name: "高木 茂 (25) / タカギ",
    address: "きさらぎ町 4-1-1 高木邸",
    info: "事件現場近くのアパートβのオーナー。"
  },

  // --- 一般ユーザー (8〜50) ---
  "@machuko_mol/L": { no: "8", name: "松本 奈々 / マチュ子", address: "愛知県名古屋市中区", info: "専門学生" },
  "@World_funny_videos": { no: "9", name: "合同会社メディアリンク / World's_おもしろ動画", address: "東京都渋谷区道玄坂", info: "動画まとめサイト運営" },
  "@yumi_tokitakalovefoever": { no: "10", name: "山根 由美 / ゆみ＠とき君推し✿⁺˖ ⸝⸝", address: "大阪府枚方市", info: "主婦" },
  // 11〜20は予備(空欄)
  "@akaka": {no:"11", name: "赤井 蓮 / あか", address: "滋賀県栗東市", info: "立命館大学生。解析の結果、彼の投稿にあるスクリーンショットは本物のようだ。"},
  "@aeuiw4ubfit7j": { no: "21", name: "井上 誠 / いぬ", address: "千葉県柏市", info: "自営業" },
  // 22〜30は予備(空欄)
  "@ten_sky": { no: "31", name: "天野 翔 / 天", address: "東京都八王子市", info: "大学生" },
  "@yamato": { no: "32", name: "山城 大和 / 大和", address: "福岡県福岡市博多区", info: "会社員" },
  "@yoi_midnight": { no: "33", name: "不詳 / 宵", address: "神奈川県横浜市中区", info: "職業不詳" },
  "@zero_logic": { no: "34", name: "零木 零 / 零", address: "東京都杉並区", info: "システムエンジニア" },
  "@LOG_kissa": { no: "35", name: "日比野 潔 / ログ", address: "京都府京都市左京区", info: "喫茶店店主" },
  "@DAIKI_GOGO": { no: "36", name: "大木 ダイキ / ダイキ", address: "長野県北安曇郡", info: "アウトドアインストラクター" },
  "@SAO_equ_justice": { no: "37", name: "佐織 沙織 / サオリ", address: "東京都世田谷区", info: "活動家" },
  "@KENTA_Mugi_Life": { no: "38", name: "石田 健太 / ケンタ", address: "埼玉県さいたま市大宮区", info: "会社員" },
  "@The_Chaos_Nightmare_Dragon_Zero_1025": { no: "39", name: "佐藤 健二 / 漆黒の翼を授かりし聖騎士", address: "広島県広島市中区", info: "高校生" },
  "@haruto_v_vision": { no: "40", name: "今井 ハルト / ハルト / 0→1挑戦中", address: "東京都目黒区", info: "大学生（起業準備中）" },
  "@root_invader_X": { no: "41", name: "不詳 / ɴᴏɪsᴇ.exe", address: "（特定不能）", info: "システムエンジニア" },
  "@KIRI_backdoor": { no: "42", name: "桐島 玲 / キリ｜情報屋", address: "兵庫県神戸市中央区", info: "職業不詳" },
  "@YUA_pipi_style": { no: "43", name: "山下 ゆあ / ゆあ❤︎", address: "神奈川県横浜市", info: "接客業" },
  "@MASA_True_Reform": { no: "44", name: "正木 勝利 / マサ｜日本を真に再生させる会", address: "東京都千代田区", info: "政治団体代表" },
  "@Ren_detect_00": { no: "45", name: "小林 レン / レン", address: "北海道札幌市中央区", info: "高校生" },
  "@shun_exam_chaos": { no: "46", name: "北村 シュン / シュン＠2浪目", address: "静岡県静岡市葵区", info: "受験生" },
  "@taka_sys_strategy": { no: "47", name: "高田 タカシ / タカシ｜DXコンサル", address: "東京都港区", info: "ITコンサルタント" },
  "@hiyori_mame_haru": { no: "48", name: "小野 ひより / ひより 🐾 豆柴ハル", address: "宮城県仙台市青葉区", info: "会社員" },
  "@Misaki_Luxury_Mind": { no: "49", name: "工藤 美咲 / ミサキ ✨", address: "東京都港区", info: "自営業" },
  "@Stella_Orbit_Truth": { no: "50", name: "佐藤 悦子 / 占星術師ステラ🔮", address: "石川県金沢市", info: "占星術師" }
};