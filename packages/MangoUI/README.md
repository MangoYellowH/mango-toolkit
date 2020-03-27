# MangoUI
React based on Functional Component

- [MangoUI](#mangoui)
  - [install](#install)
    - [install homebrew into system](#install-homebrew-into-system)
    - [install iterm2](#install-iterm2)
    - [git](#git)

## install

### install homebrew into system

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

```

### install iterm2

```shell
$ brew update                           # Fetch latest version of homebrew and formula.
$ brew tap caskroom/cask                # Tap the Caskroom/Cask repository from Github using HTTPS.
$ brew search iterm2                    # Searches all known Casks for a partial or exact match.
$ brew cask info iterm2                 # Displays information about the given Cask
$ brew cask install iterm2              # Install the given cask.
$ brew cleanup                          # Remove any older versions from the cellar.
```

### git

make sure git is installed.

### Homebrew

update your brew to the very new version:

```shell
brew update && brew upgrade && brew cleanup
brew cask cleanup
```


some useful libs

```shell

brew install tig # the helper of git log
brew install pyenv # python version management 

```

### init project

```
npm init
```

### yarn

```
brew install yarn
```

```
brew upgrade yarn 
```



## Other

### git moji
<https://gitmoji.carloscuesta.me/>

### configure eslint typescript

```
yarn add -D eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import
```

read .eslint file




