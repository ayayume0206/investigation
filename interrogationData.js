const interrogationData = {
  "宮本 勇気": {
    defaultResponse: "「あかりさんを殺してなんかいません。私は何も知りません。」",
    responses: [
      {
        type: "FULL",
        required: ["disclosure_11", "disclosure_1", "camera_a-704", "sns_13"],
        text: "「【自白】そうです。私はカラオケから先に帰ってSさんを殺しました。高揚感からそのようなツイートをしてしまった。すぐ消したが、誰かが撮っているとは思いもしなかった。」"
      },
      {
        type: "FULL",
        required: ["camera_a-704", "sns_13"],
        text: "「先に帰ったからといって私が犯人な訳がないでしょう。脅してなんかいませんよ！」"
      },
      {
        type: "FULL",
        required: ["sns_169", "disclosure_1"],
        text: "「そんなのフェイクに決まっているじゃないですか。」"
      },
      {
        type: "FULL",
        required: ["sns_2", "disclosure_1"],
        text: "「それは私のアカウントです。間違えたツイートがあったので削除しただけですよ。」"
      },
      {
        type: "FULL",
        required: ["disclosure_2", "camera_a-410"],
        text: "【自白】「そうです。私が七瀬さんを殺しました。彼女を自分のものにしたかったんです。」"
      },
      {
        type: "FULL",
        required: ["disclosure_1"],
        text: "「それは私のアカウントで間違いありません。」"
      },
      {
        type: "FULL",
        required: ["sns_169"],
        text: "「誰がそんなものを投稿したのでしょうか。物騒ですね。」"
      },
      {
        type: "FULL",
        required: ["sns_2"],
        text: "「誰の投稿ですか？何かを削除したんでしょうね。」"
      },
      {
        type: "FULL",
        required: ["sns_131"],
        text: "「SNSで何を言おうが自由でしょう。実際には行ってませんよ。」"
      },
      {
        type: "FULL",
        required: ["disclosure_2"],
        text: "「確かに私はそんな投稿をしましたが、ただファンなだけです。後ろ姿の写真だってフェイクですよ！」"
      },
      {
        type: "FULL",
        required: ["camera_a-410"],
        text: "「怖いですね。被害者は盗撮間に追いかけられていたなんて。そいつが犯人に違いない。」"
      },
      {
        type: "FULL",
        required: ["disclosure_11"],
        text: "「リーク？誰の何をリークしたんですか？私には関係ありませんよ。」"
      },
      {
        type: "FULL",
        required: ["disclosure_11", "disclosure_1"],
        text: "「私はカラオケにいたと言ってるじゃないですか。高梨がそう投稿してるはずですが。私の投稿はただのイタズラですよ。」"
      }
    ]
  },
  "高梨 美穂": {
    defaultResponse: "「仕事が忙しいんです。帰らせてください。私はこの事件に関係してません。」",
    responses: [
      {
        type: "FULL",
        required: ["camera_a-704", "sns_13"],
        text: "「確かに、私が1人でカラオケを出ているのはおかしいですよね…実は、宮本は3時前に帰りました。宮本に脅されてフェイク画像を作るように言われたんです。怖かった。」【高梨の証言：カメラa-704、SNS投稿13】として利用することができます。"
      },
      {
        type: "FULL",
        required: ["disclosure_7", "sns_39"],
        text: "「確かに私が契約しましたが、引っ越せてません。誰かが出入りしている噂があって、そのせいでなかなか行動できなくて…」"
      },
      {
        type: "FULL",
        required: ["camera_a-404", "disclosure_4"],
        text: "【自白】宮本が実行して、私がその指示を出しました。宮本を庇うために世論の操作を試みましたが、まさか見破られるとは。完敗です。"
      },
      {
        type: "FULL",
        required: ["disclosure_4", "sns_16"],
        text: "「それは大橋に脅されたんですよ！犯行の翌日の昼12時前だったと思います、T字路であいつに脅されたんです！フェイクを作って捜査を撹乱させ、世論を味方につけるように指示されました。殺したのは私ではありません。」"
      },
            {
        type: "FULL",
        required: ["camera_a-404"],
        text: "「その画像がどうかしましたか？道が写っていますが。せめてなんの関係があるのか言ってもらわないと。」"
      },
      {
        type: "FULL",
        required: ["disclosure_4"],
        text: "「それは私に間違いありませんが、個人的に事件を追っていただけです。防犯カメラの映像もツテで入手しました。私以外にもそんな人はたくさんいるでしょう？」"
      },
      {
        type: "FULL",
        required: ["sns_13"],
        text: "「当初述べた通り、2人でカラオケを楽しんでいました。」"
      },
      {
        type: "FULL",
        required: ["camera_a-704"],
        text: "「宮本とカラオケを楽しんで、私は先に帰りました。」"
      }
    ]
  },
  "阿部 沙織": {
    defaultResponse: "「私はこの事件に一切関与していません。七瀬さんを殺すことはあり得ません。」",
    responses: [
      {
        type: "FULL",
        required: ["camera_a-103"],
        text: "「ただコンビニにいただけですよ。事件には無関係です。」"
      },
      {
        type: "FULL",
        required: ["camera_a-804"],
        text: "「仕事に行っただけですよ。」"
      },
    ]
  },

  "酒井 太郎": {
    defaultResponse: "「私が事件について知っていることは何もありません。帰らせてください。」",
    responses: [
      {
        type: "FULL",
        required: ["camera_a-102"],
        text: "「ただコンビニに行っただけですよ。被害者を殺害するのにわざわざコンビニに行く理由がないじゃないですか。」"
      },
      {
        type: "FULL",
        required: ["camera_a-302"],
        text: "「コンビニに行ったので、自分の住んでいる場所に帰っただけです。」"
      },
      {
        type: "FULL",
        required: ["camera_a-105"],
        text: "「ただコンビニに行っただけですよ。」"
      }
    ]
  },

  "溝口 翔太郎": {
    defaultResponse: "「七瀬さんと実際に会ったことは一度もありません。」",
    responses: [
      {
        type: "FULL",
        required: ["disclosure_6", "sns_31", "sns_35"],
        text: "「一緒にゲームをしましたが、連絡がつかなくて心配だったんですよ。」"
      },
      {
        type: "FULL",
        required: ["disclosure_6", "sns_31"],
        text: "「事件を知るまでは連絡がつかず心配していました。3日間も連絡がつかないことはなかったので。」"
      },
      {
        type: "FULL",
        required: ["disclosure_6", "sns_35"],
        text: "「文字通り一緒にゲームをしました。特に変わった様子はありませんでしたよ。」"
      },
      {
        type: "FULL",
        required: ["disclosure_6"],
        text: "「それは私で間違いありません。被害者とはオンラインゲームを通じて仲が良かったです。」"
      },
      {
        type: "FULL",
        required: ["sns_31"],
        text: "「誰の投稿でしょうか。」"
      },
      {
        type: "FULL",
        required: ["sns_35"],
        text: "「誰の投稿でしょうか。」"
      },
      {
        type: "FULL",
        required: ["camera_a-202"],
        text: "「ずっと残業をしてました。繁忙期なんですよ。」"
      },
      {
        type: "FULL",
        required: ["camera_a-204"],
        text: "「仕事の帰りです。」"
      },
      {
        type: "FULL",
        required: ["sns_16"],
        text: "「僕はその時間はコンビニに行ってません。アリバイはありませんが、確かですよ。」"
      }
    ]
  },

  "高木 茂": {
    defaultResponse: "「近くに住んでいるのである程度事件のことは聞きますが、私は一切関係していません。」",
    responses: [
      {
        type: "FULL",
        required: ["disclosure_7", "sns_39"],
        text: "「本当に誰も住んでいる気配がないんですよ。高梨さんという方が契約されたお部屋ですよ。」大家さんの証言：開示請求：7、ツイート：39 として利用することができます。"
      },
      {
        type: "FULL",
        required: ["disclosure_7"],
        text: "「それは私のアカウントに間違いありません。」"
      },
      {
        type: "FULL",
        required: ["sns_39"],
        text: "「誰の投稿でしょうか？」"
      }
    ]
  },

  "大橋 俊": {
    defaultResponse: "事情聴取はできないようだ。",
  }
};