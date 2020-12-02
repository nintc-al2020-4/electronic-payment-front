# electronic-payment-front

## For Developers

### Git環境構築

1. Gitをインストール
    - https://git-scm.com/downloads
2. Gitの設定
    1. `git config --global user.name "hoge"`
        - `hoge`はGitHubのユーザー名などに
    2. `git config --global user.email "hoge@example.com"`
        - `hoge@example.com`はGitHubに登録しているメールアドレスに
        - GitHubは複数メアド登録できたりします
    3. `git config --global core.autocrlf input`
3. プロジェクトディレクトリ**を置きたいディレクトリ**に移動
    - エクスプローラーで右クリックしてGit Bashとか
    - エクスプローラーでShift+右クリックしてPowerShellを開くとか
    - cdコマンドとか
4. `git clone https://github.com/nintc-al2020-4/electronic-payment-front.git`
    - `hoge`ってディレクトリで打った場合`hoge/electronic-payment-front`がプロジェクトディレクトリになります

### Vue環境構築

1. Node.jsをインストール
    - https://nodejs.org/ja/download/
2. Yarnをインストール
    - https://classic.yarnpkg.com/ja/docs/install
3. `yarn global add @vue/cli`
    - Vueのバージョンは`Default (Vue 3 Preview)`を選んでください
4. `yarn install`

### 更新の適用

1. `git pull origin`
2. `yarn install`
