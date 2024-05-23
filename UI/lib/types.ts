interface ClassProps {
  class?: string
  attrs?: any
  key?: any
  disabled?: boolean
}

export interface JsxElementProps extends ClassProps {}

export interface ILogoOptions {
  href: string
}

export type IconNames =
  | 'accessibility-sign'
  | 'accessibility-tech'
  | 'accessibility'
  | 'activity'
  | 'adobe-after-effects'
  | 'adobe-illustrator'
  | 'adobe-indesign'
  | 'adobe-lightroom'
  | 'adobe-photoshop'
  | 'adobe-xd'
  | 'african-tree'
  | 'agile'
  | 'air-conditioner'
  | 'airplane-helix-45deg'
  | 'airplane-helix'
  | 'airplane-off'
  | 'airplane-rotation'
  | 'airplane'
  | 'airplay'
  | 'alarm'
  | 'album-carousel'
  | 'album-list'
  | 'album-open'
  | 'album'
  | 'align-bottom-box'
  | 'align-center'
  | 'align-horizontal-centers'
  | 'align-horizontal-spacing'
  | 'align-justify'
  | 'align-left-box'
  | 'align-left'
  | 'align-right-box'
  | 'align-right'
  | 'align-top-box'
  | 'align-vertical-centers'
  | 'align-vertical-spacing'
  | 'angle-tool'
  | 'antenna-off'
  | 'antenna-signal-tag'
  | 'antenna-signal'
  | 'antenna'
  | 'app-notification'
  | 'app-store'
  | 'app-window'
  | 'apple-half'
  | 'apple-imac-2021-side'
  | 'apple-imac-2021'
  | 'apple-mac'
  | 'apple-shortcuts'
  | 'apple-swift'
  | 'apple-wallet'
  | 'apple'
  | 'ar-tag'
  | 'arc-3d-center-point'
  | 'arc-3d'
  | 'arcade'
  | 'archery-match'
  | 'archery'
  | 'archive'
  | 'area-search'
  | 'arrow-archery'
  | 'arrow-down-circle'
  | 'arrow-down-left-circle'
  | 'arrow-down-left-square'
  | 'arrow-down-left'
  | 'arrow-down-right-circle'
  | 'arrow-down-right-square'
  | 'arrow-down-right'
  | 'arrow-down-tag'
  | 'arrow-down'
  | 'arrow-email-forward'
  | 'arrow-enlarge-tag'
  | 'arrow-left-circle'
  | 'arrow-left-tag'
  | 'arrow-left'
  | 'arrow-reduce-tag'
  | 'arrow-right-circle'
  | 'arrow-right-tag'
  | 'arrow-right'
  | 'arrow-separate-vertical'
  | 'arrow-separate'
  | 'arrow-union-vertical'
  | 'arrow-union'
  | 'arrow-up-circle'
  | 'arrow-up-left-circle'
  | 'arrow-up-left-square'
  | 'arrow-up-left'
  | 'arrow-up-right-circle'
  | 'arrow-up-right-square'
  | 'arrow-up-right'
  | 'arrow-up-tag'
  | 'arrow-up'
  | 'arrows-up-from-line'
  | 'asana'
  | 'asterisk'
  | 'at-sign-circle'
  | 'at-sign'
  | 'atom'
  | 'attachment'
  | 'augmented-reality'
  | 'auto-flash'
  | 'avi-format'
  | 'axes'
  | 'backward-15-seconds'
  | 'badge-check'
  | 'bag'
  | 'balcony'
  | 'bank'
  | 'barcode'
  | 'basketball-field'
  | 'basketball'
  | 'bathroom'
  | 'battery-25'
  | 'battery-50'
  | 'battery-75'
  | 'battery-charging'
  | 'battery-empty'
  | 'battery-full'
  | 'battery-indicator'
  | 'battery-slash'
  | 'battery-warning'
  | 'bbq'
  | 'beach-bag'
  | 'bed-ready'
  | 'bed'
  | 'behance-tag'
  | 'behance'
  | 'bell-notification'
  | 'bell-off'
  | 'bell'
  | 'bicycle'
  | 'bin-full'
  | 'bin-half'
  | 'bin-minus-in'
  | 'bin-plus-in'
  | 'bin'
  | 'binocular'
  | 'birthday-cake'
  | 'bishop'
  | 'bitbucket'
  | 'bitcoin-circle'
  | 'bitcoin-rotate-out'
  | 'bluetooth-tag'
  | 'bluetooth'
  | 'bold-square'
  | 'bold'
  | 'bonfire'
  | 'book-lock'
  | 'book-stack'
  | 'book'
  | 'bookmark-book'
  | 'bookmark-circle'
  | 'bookmark'
  | 'border-bl'
  | 'border-bottom'
  | 'border-br'
  | 'border-inner'
  | 'border-left'
  | 'border-out'
  | 'border-right'
  | 'border-tl'
  | 'border-top'
  | 'border-tr'
  | 'bounce-left'
  | 'bounce-right'
  | 'bowling-ball'
  | 'box-3d-center'
  | 'box-3d-point'
  | 'box-3d-three-points'
  | 'box-iso'
  | 'box'
  | 'boxing-glove'
  | 'brain-electricity'
  | 'brain-research'
  | 'brain-warning'
  | 'brain'
  | 'bread-slice'
  | 'bridge-3d'
  | 'bridge-surface'
  | 'bright-crown'
  | 'bright-star'
  | 'brightness-window'
  | 'brightness'
  | 'bubble-download'
  | 'bubble-income'
  | 'bubble-outcome'
  | 'bubble-search'
  | 'bubble-star'
  | 'bubble-upload'
  | 'bubble-warning'
  | 'bubble-xmark'
  | 'building'
  | 'bus-green'
  | 'bus-stop'
  | 'bus'
  | 'c-square'
  | 'cable-tag'
  | 'calculator'
  | 'calendar-minus'
  | 'calendar-plus'
  | 'calendar'
  | 'camera'
  | 'candlestick-chart'
  | 'car'
  | 'card-lock'
  | 'card-no-access'
  | 'card-reader'
  | 'card-shield'
  | 'card-wallet'
  | 'cart-alt'
  | 'cart-minus'
  | 'cart-plus'
  | 'cart'
  | 'cash'
  | 'cell-2x2'
  | 'cellar'
  | 'center-align'
  | 'chat-bubble-check'
  | 'chat-bubble-empty'
  | 'chat-bubble-question'
  | 'chat-bubble-translate'
  | 'chat-bubble-warning'
  | 'chat-bubble-xmark'
  | 'chat-bubble'
  | 'chat-lines'
  | 'chat-minus-in'
  | 'chat-plus-in'
  | 'check-circle'
  | 'check-square'
  | 'check'
  | 'chocolate'
  | 'chromecast-active'
  | 'chromecast'
  | 'church-side'
  | 'church'
  | 'cigarette-slash'
  | 'cinema-old'
  | 'circle-spark'
  | 'circle'
  | 'city'
  | 'clipboard-check'
  | 'clock-rotate-right'
  | 'clock'
  | 'closed-captions-tag'
  | 'closet'
  | 'cloud-bookmark'
  | 'cloud-check'
  | 'cloud-desync'
  | 'cloud-download'
  | 'cloud-square'
  | 'cloud-sunny'
  | 'cloud-sync'
  | 'cloud-upload'
  | 'cloud-xmark'
  | 'cloud'
  | 'code-brackets-square'
  | 'code-brackets'
  | 'code'
  | 'codepen'
  | 'coffee-cup'
  | 'coin-slash'
  | 'coins-swap'
  | 'coins'
  | 'collage-frame'
  | 'collapse'
  | 'color-filter'
  | 'color-picker'
  | 'color-wheel'
  | 'combine'
  | 'commodity'
  | 'community'
  | 'comp-align-bottom'
  | 'comp-align-left'
  | 'comp-align-right'
  | 'comp-align-top'
  | 'compact-disc'
  | 'compass'
  | 'component'
  | 'compress-lines'
  | 'compress'
  | 'computer'
  | 'constrained-surface'
  | 'consumable'
  | 'contactless'
  | 'control-slider'
  | 'cookie'
  | 'cooling-square'
  | 'copy'
  | 'copyright'
  | 'corner-bottom-left'
  | 'corner-bottom-right'
  | 'corner-top-left'
  | 'corner-top-right'
  | 'cpu-warning'
  | 'cpu'
  | 'cracked-egg'
  | 'creative-commons'
  | 'credit-card-slash'
  | 'credit-card'
  | 'credit-cards'
  | 'crib'
  | 'crop-rotate-bl'
  | 'crop-rotate-br'
  | 'crop-rotate-tl'
  | 'crop-rotate-tr'
  | 'crop'
  | 'crown-circle'
  | 'crown'
  | 'css3'
  | 'cube-bandage'
  | 'cube-cut-with-curve'
  | 'cube-hole'
  | 'cube-replace-face'
  | 'cube'
  | 'cursor-pointer'
  | 'curve-array'
  | 'cut'
  | 'cutlery'
  | 'cycling'
  | 'cylinder'
  | 'dash-flag'
  | 'dashboard-dots'
  | 'dashboard-speed'
  | 'dashboard'
  | 'data-transfer-both'
  | 'data-transfer-check'
  | 'data-transfer-down'
  | 'data-transfer-up'
  | 'data-transfer-warning'
  | 'database-backup'
  | 'database-check'
  | 'database-export'
  | 'database-monitor'
  | 'database-restore'
  | 'database-script-minus'
  | 'database-script-plus'
  | 'database-script'
  | 'database-search'
  | 'database-settings'
  | 'database-star'
  | 'database-stats'
  | 'database-tag'
  | 'database-warning'
  | 'database-xmark'
  | 'database'
  | 'de-compress'
  | 'delivery-truck'
  | 'delivery'
  | 'depth'
  | 'design-nib'
  | 'design-pencil'
  | 'desk'
  | 'developer'
  | 'dew-point'
  | 'dialpad'
  | 'diameter'
  | 'dice-five'
  | 'dice-four'
  | 'dice-one'
  | 'dice-six'
  | 'dice-three'
  | 'dice-two'
  | 'dimmer-switch'
  | 'director-chair'
  | 'discord'
  | 'dishwasher'
  | 'display-4k'
  | 'divide-three'
  | 'divide'
  | 'dna'
  | 'dns'
  | 'doc-magnifying-glass-in'
  | 'doc-magnifying-glass'
  | 'doc-star-in'
  | 'doc-star'
  | 'dogecoin-circle'
  | 'dogecoin-rotate-out'
  | 'dollar-circle'
  | 'dollar'
  | 'domotic-warning'
  | 'donate'
  | 'dot-arrow-down'
  | 'dot-arrow-left'
  | 'dot-arrow-right'
  | 'dot-arrow-up'
  | 'double-check'
  | 'download-circle'
  | 'download-data-window'
  | 'download-square'
  | 'download'
  | 'drag-hand-gesture'
  | 'drag'
  | 'drawer'
  | 'dribbble'
  | 'drone-charge-full'
  | 'drone-charge-half'
  | 'drone-charge-low'
  | 'drone-check'
  | 'drone-landing'
  | 'drone-refresh'
  | 'drone-take-off'
  | 'drone-xmark'
  | 'drone'
  | 'droplet-check'
  | 'droplet-half'
  | 'droplet'
  | 'ease-curve-control-points'
  | 'ease-in-control-point'
  | 'ease-in-out'
  | 'ease-in'
  | 'ease-out-control-point'
  | 'ease-out'
  | 'ecology-book'
  | 'edit-pencil'
  | 'edit'
  | 'egg'
  | 'eject'
  | 'electronics-chip'
  | 'electronics-transistor'
  | 'elevator'
  | 'ellipse-3d-three-points'
  | 'ellipse-3d'
  | 'emoji-ball'
  | 'emoji-blink-left'
  | 'emoji-blink-right'
  | 'emoji-look-down'
  | 'emoji-look-left'
  | 'emoji-look-right'
  | 'emoji-look-up'
  | 'emoji-puzzled'
  | 'emoji-quite'
  | 'emoji-really'
  | 'emoji-sad'
  | 'emoji-satisfied'
  | 'emoji-sing-left-note'
  | 'emoji-sing-left'
  | 'emoji-sing-right-note'
  | 'emoji-sing-right'
  | 'emoji-surprise-alt'
  | 'emoji-surprise'
  | 'emoji-talking-angry'
  | 'emoji-talking-happy'
  | 'emoji-think-left'
  | 'emoji-think-right'
  | 'emoji'
  | 'empty-page'
  | 'energy-usage-window'
  | 'enlarge'
  | 'erase'
  | 'ethereum-circle'
  | 'ethereum-rotate-out'
  | 'euro-square'
  | 'euro'
  | 'ev-charge-alt'
  | 'ev-charge'
  | 'ev-plug-charging'
  | 'ev-plug-xmark'
  | 'ev-plug'
  | 'ev-station'
  | 'ev-tag'
  | 'exclude'
  | 'expand-lines'
  | 'expand'
  | 'extrude'
  | 'eye-closed'
  | 'eye'
  | 'f-square'
  | 'face-3d-draft'
  | 'face-id'
  | 'facebook-tag'
  | 'facebook'
  | 'facetime'
  | 'farm'
  | 'fast-arrow-down-square'
  | 'fast-arrow-down'
  | 'fast-arrow-left-square'
  | 'fast-arrow-left'
  | 'fast-arrow-right-square'
  | 'fast-arrow-right'
  | 'fast-arrow-up-square'
  | 'fast-arrow-up'
  | 'fast-down-circle'
  | 'fast-left-circle'
  | 'fast-right-circle'
  | 'fast-up-circle'
  | 'favourite-book'
  | 'favourite-window'
  | 'female'
  | 'figma'
  | 'file-not-found'
  | 'fileNames.ts'
  | 'fill-color'
  | 'fillet-3d'
  | 'filter-alt'
  | 'filter-list-circle'
  | 'filter-list'
  | 'filter'
  | 'finder'
  | 'fingerprint-check-circle'
  | 'fingerprint-circle'
  | 'fingerprint-lock-circle'
  | 'fingerprint-scan'
  | 'fingerprint-square'
  | 'fingerprint-window'
  | 'fingerprint-xmark-circle'
  | 'fingerprint'
  | 'fire-flame'
  | 'fish'
  | 'fishing'
  | 'flare'
  | 'flash-off'
  | 'flash'
  | 'flask'
  | 'flip-reverse'
  | 'flip'
  | 'floppy-disk-arrow-in'
  | 'floppy-disk-arrow-out'
  | 'floppy-disk'
  | 'flower'
  | 'fog'
  | 'folder-minus'
  | 'folder-plus'
  | 'folder-settings'
  | 'folder-warning'
  | 'folder'
  | 'font-question'
  | 'football-ball'
  | 'football'
  | 'forward-15-seconds'
  | 'forward-message'
  | 'forward'
  | 'frame-alt-empty'
  | 'frame-alt'
  | 'frame-minus-in'
  | 'frame-plus-in'
  | 'frame-select'
  | 'frame-simple'
  | 'frame-tool'
  | 'frame'
  | 'fridge'
  | 'fx-tag'
  | 'fx'
  | 'gamepad'
  | 'garage'
  | 'gas-tank-droplet'
  | 'gas-tank'
  | 'gas'
  | 'getFileName.js'
  | 'gif-format'
  | 'gift'
  | 'git-branch'
  | 'git-cherry-pick-commit'
  | 'git-commit'
  | 'git-compare'
  | 'git-fork'
  | 'git-merge'
  | 'git-pull-request-closed'
  | 'git-pull-request'
  | 'github-circle'
  | 'github'
  | 'gitlab-full'
  | 'glass-empty'
  | 'glass-fragile'
  | 'glass-half-alt'
  | 'glass-half'
  | 'glasses'
  | 'globe'
  | 'golf'
  | 'google-circle'
  | 'google-docs'
  | 'google-drive-check'
  | 'google-drive-sync'
  | 'google-drive-warning'
  | 'google-drive'
  | 'google-home'
  | 'google-one'
  | 'google'
  | 'gps'
  | 'graduation-cap'
  | 'graph-down'
  | 'graph-up'
  | 'grid-minus'
  | 'grid-plus'
  | 'grid-xmark'
  | 'group'
  | 'gym'
  | 'h-square'
  | 'half-cookie'
  | 'half-moon'
  | 'hammer'
  | 'hand-brake'
  | 'hand-card'
  | 'hand-cash'
  | 'hand-contactless'
  | 'handbag'
  | 'hard-drive'
  | 'hashtag'
  | 'hat'
  | 'hd-display'
  | 'hd'
  | 'hdr'
  | 'headset-bolt'
  | 'headset-help'
  | 'headset-warning'
  | 'headset'
  | 'health-shield'
  | 'healthcare'
  | 'heart-arrow-down'
  | 'heart'
  | 'heating-square'
  | 'heavy-rain'
  | 'help-circle'
  | 'help-square'
  | 'heptagon'
  | 'hexagon-dice'
  | 'hexagon-plus'
  | 'hexagon'
  | 'historic-shield-alt'
  | 'historic-shield'
  | 'home-alt-slim-horiz'
  | 'home-alt-slim'
  | 'home-alt'
  | 'home-hospital'
  | 'home-sale'
  | 'home-secure'
  | 'home-shield'
  | 'home-simple-door'
  | 'home-simple'
  | 'home-table'
  | 'home-temperature-in'
  | 'home-temperature-out'
  | 'home-user'
  | 'home'
  | 'horiz-distribution-left'
  | 'horiz-distribution-right'
  | 'horizontal-merge'
  | 'horizontal-split'
  | 'hospital-circle'
  | 'hospital'
  | 'hot-air-balloon'
  | 'hourglass'
  | 'house-rooms'
  | 'html5'
  | 'ice-cream'
  | 'iconoir'
  | 'import'
  | 'inclination'
  | 'industry'
  | 'infinite'
  | 'info-circle'
  | 'input-field'
  | 'input-output'
  | 'input-search'
  | 'instagram'
  | 'internet'
  | 'intersect-alt'
  | 'intersect'
  | 'ios-settings'
  | 'ip-address-tag'
  | 'iris-scan'
  | 'italic-square'
  | 'italic'
  | 'jellyfish'
  | 'journal-page'
  | 'journal'
  | 'jpeg-format'
  | 'jpg-format'
  | 'kanban-board'
  | 'key-back'
  | 'key-command'
  | 'key-minus'
  | 'key-plus'
  | 'key-xmark'
  | 'key'
  | 'keyframe-align-center'
  | 'keyframe-align-horizontal'
  | 'keyframe-align-vertical'
  | 'keyframe-minus-in'
  | 'keyframe-minus'
  | 'keyframe-plus-in'
  | 'keyframe-plus'
  | 'keyframe-position'
  | 'keyframe'
  | 'keyframes-couple'
  | 'keyframes-minus'
  | 'keyframes-plus'
  | 'keyframes'
  | 'label'
  | 'lamp'
  | 'language'
  | 'laptop-charging'
  | 'laptop-dev-mode'
  | 'laptop-fix'
  | 'laptop-warning'
  | 'laptop'
  | 'layout-left'
  | 'layout-right'
  | 'leaderboard-star'
  | 'leaderboard'
  | 'leaf'
  | 'learning'
  | 'lens-plus'
  | 'lens'
  | 'lifebelt'
  | 'light-bulb-off'
  | 'light-bulb-on'
  | 'light-bulb'
  | 'line-space'
  | 'linear'
  | 'link-slash'
  | 'link-xmark'
  | 'link'
  | 'linkedin'
  | 'linux'
  | 'list-select'
  | 'list'
  | 'litecoin-circle'
  | 'litecoin-rotate-out'
  | 'lock-slash'
  | 'lock-square'
  | 'lock'
  | 'loft-3d'
  | 'log-in'
  | 'log-no-access'
  | 'log-out'
  | 'long-arrow-down-left'
  | 'long-arrow-down-right'
  | 'long-arrow-left-down'
  | 'long-arrow-left-up'
  | 'long-arrow-right-down'
  | 'long-arrow-right-up'
  | 'long-arrow-up-left'
  | 'long-arrow-up-right'
  | 'lot-of-cash'
  | 'lullaby'
  | 'mac-control-key'
  | 'mac-dock'
  | 'mac-option-key'
  | 'mac-os-window'
  | 'magic-wand'
  | 'magnet-energy'
  | 'magnet'
  | 'mail-in'
  | 'mail-open'
  | 'mail-out'
  | 'mail'
  | 'male'
  | 'map-pin-minus'
  | 'map-pin-plus'
  | 'map-pin-xmark'
  | 'map-pin'
  | 'map-xmark'
  | 'map'
  | 'maps-arrow-diagonal'
  | 'maps-arrow-xmark'
  | 'maps-arrow'
  | 'maps-go-straight'
  | 'maps-turn-back'
  | 'maps-turn-left'
  | 'maps-turn-right'
  | 'mask-square'
  | 'mastercard-card'
  | 'mastodon'
  | 'math-book'
  | 'maximize'
  | 'medal-1st'
  | 'medal'
  | 'media-image-folder'
  | 'media-image-list'
  | 'media-image-plus'
  | 'media-image-xmark'
  | 'media-image'
  | 'media-video-folder'
  | 'media-video-list'
  | 'media-video-plus'
  | 'media-video-xmark'
  | 'media-video'
  | 'medium'
  | 'megaphone'
  | 'menu-scale'
  | 'menu'
  | 'message-alert'
  | 'message-text'
  | 'message'
  | 'meter-arrow-down-right'
  | 'metro'
  | 'microphone-check'
  | 'microphone-minus'
  | 'microphone-mute'
  | 'microphone-plus'
  | 'microphone-speaking'
  | 'microphone-warning'
  | 'microphone'
  | 'microscope'
  | 'minus-circle'
  | 'minus-hexagon'
  | 'minus-square-dashed'
  | 'minus-square'
  | 'minus'
  | 'mirror'
  | 'mobile-dev-mode'
  | 'mobile-fingerprint'
  | 'mobile-voice'
  | 'modern-tv-4k'
  | 'modern-tv'
  | 'money-square'
  | 'moon-sat'
  | 'more-horiz-circle'
  | 'more-horiz'
  | 'more-vert-circle'
  | 'more-vert'
  | 'motorcycle'
  | 'mouse-button-left'
  | 'mouse-button-right'
  | 'mouse-scroll-wheel'
  | 'movie'
  | 'mpeg-format'
  | 'multi-bubble'
  | 'multi-mac-os-window'
  | 'multi-window'
  | 'multiple-pages-empty'
  | 'multiple-pages-minus'
  | 'multiple-pages-plus'
  | 'multiple-pages-xmark'
  | 'multiple-pages'
  | 'music-double-note-plus'
  | 'music-double-note'
  | 'music-note-plus'
  | 'music-note'
  | 'n-square'
  | 'nav-arrow-down'
  | 'nav-arrow-left'
  | 'nav-arrow-right'
  | 'nav-arrow-up'
  | 'navigator-alt'
  | 'navigator'
  | 'neighbourhood'
  | 'network-left'
  | 'network-reverse'
  | 'network-right'
  | 'network'
  | 'new-tab'
  | 'nintendo-switch'
  | 'no-smoking-circle'
  | 'non-binary'
  | 'notes'
  | 'npm-square'
  | 'npm'
  | 'number-0-square'
  | 'number-1-square'
  | 'number-2-square'
  | 'number-3-square'
  | 'number-4-square'
  | 'number-5-square'
  | 'number-6-square'
  | 'number-7-square'
  | 'number-8-square'
  | 'number-9-square'
  | 'numbered-list-left'
  | 'numbered-list-right'
  | 'o-square'
  | 'octagon'
  | 'off-tag'
  | 'oil-industry'
  | 'okrs'
  | 'on-tag'
  | 'one-finger-select-hand-gesture'
  | 'one-point-circle'
  | 'open-book'
  | 'open-in-browser'
  | 'open-in-window'
  | 'open-new-window'
  | 'open-select-hand-gesture'
  | 'open-vpn'
  | 'orange-half'
  | 'orange-slice-alt'
  | 'orange-slice'
  | 'organic-food-square'
  | 'organic-food'
  | 'orthogonal-view'
  | 'package-lock'
  | 'package'
  | 'packages'
  | 'pacman'
  | 'page-down'
  | 'page-edit'
  | 'page-flip'
  | 'page-left'
  | 'page-minus-in'
  | 'page-minus'
  | 'page-plus-in'
  | 'page-plus'
  | 'page-right'
  | 'page-search'
  | 'page-star'
  | 'page-up'
  | 'page'
  | 'palette'
  | 'panorama-enlarge'
  | 'panorama-reduce'
  | 'pants-pockets'
  | 'pants'
  | 'parking'
  | 'password-check'
  | 'password-cursor'
  | 'password-xmark'
  | 'paste-clipboard'
  | 'path-arrow'
  | 'pause-window'
  | 'pause'
  | 'paypal'
  | 'pc-check'
  | 'pc-firewall'
  | 'pc-mouse'
  | 'pc-no-entry'
  | 'pc-warning'
  | 'peace-hand'
  | 'peerlist'
  | 'pen-connect-bluetooth'
  | 'pen-connect-wifi'
  | 'pen-tablet-connect-usb'
  | 'pen-tablet-connect-wifi'
  | 'pen-tablet'
  | 'pentagon'
  | 'people-tag'
  | 'percent-rotate-out'
  | 'percentage-circle'
  | 'percentage-square'
  | 'percentage'
  | 'perspective-view'
  | 'pharmacy-cross-circle'
  | 'pharmacy-cross-tag'
  | 'phone-disabled'
  | 'phone-income'
  | 'phone-minus'
  | 'phone-outcome'
  | 'phone-paused'
  | 'phone-plus'
  | 'phone-xmark'
  | 'phone'
  | 'piggy-bank'
  | 'pillow'
  | 'pin-slash'
  | 'pin'
  | 'pine-tree'
  | 'pinterest'
  | 'pipe-3d'
  | 'pizza-slice'
  | 'planet-alt'
  | 'planet-sat'
  | 'planet'
  | 'planimetry'
  | 'play'
  | 'playlist-play'
  | 'playlist-plus'
  | 'playlist'
  | 'playstation-gamepad'
  | 'plug-type-a'
  | 'plug-type-c'
  | 'plug-type-g'
  | 'plug-type-l'
  | 'plus-circle'
  | 'plus-square-dashed'
  | 'plus-square'
  | 'plus'
  | 'png-format'
  | 'pocket'
  | 'podcast'
  | 'pokeball'
  | 'polar-sh'
  | 'position-align'
  | 'position'
  | 'post'
  | 'potion'
  | 'pound'
  | 'precision-tool'
  | 'presentation'
  | 'printer'
  | 'printing-page'
  | 'priority-down'
  | 'priority-high'
  | 'priority-medium'
  | 'priority-up'
  | 'privacy-policy'
  | 'private-wifi'
  | 'profile-circle'
  | 'prohibition'
  | 'project-curve-3d'
  | 'puzzle'
  | 'qr-code'
  | 'question-mark'
  | 'quote-message'
  | 'quote'
  | 'radiation'
  | 'radius'
  | 'rain'
  | 'raw-format'
  | 'receive-dollars'
  | 'receive-euros'
  | 'receive-pounds'
  | 'receive-yens'
  | 'redo-action'
  | 'redo-circle'
  | 'redo'
  | 'reduce'
  | 'refresh-circle'
  | 'refresh-double'
  | 'refresh'
  | 'reload-window'
  | 'reminder-hand-gesture'
  | 'repeat-once'
  | 'repeat'
  | 'reply-to-message'
  | 'reply'
  | 'report-columns'
  | 'reports'
  | 'repository'
  | 'restart'
  | 'rewind'
  | 'rhombus-arrow-right'
  | 'rhombus'
  | 'rings'
  | 'rocket'
  | 'rook'
  | 'rotate-camera-left'
  | 'rotate-camera-right'
  | 'round-flask'
  | 'rounded-mirror'
  | 'rss-feed-tag'
  | 'rss-feed'
  | 'rubik-cube'
  | 'ruler-arrows'
  | 'ruler-combine'
  | 'ruler-minus'
  | 'ruler-plus'
  | 'ruler'
  | 'running'
  | 'safari'
  | 'safe-arrow-left'
  | 'safe-arrow-right'
  | 'safe-open'
  | 'safe'
  | 'sandals'
  | 'scale-frame-enlarge'
  | 'scale-frame-reduce'
  | 'scan-barcode'
  | 'scan-qr-code'
  | 'scanning'
  | 'scarf'
  | 'scissor-alt'
  | 'scissor'
  | 'screenshot'
  | 'sea-and-sun'
  | 'sea-waves'
  | 'search-engine'
  | 'search-window'
  | 'search'
  | 'secure-window'
  | 'security-pass'
  | 'select-edge-3d'
  | 'select-face-3d'
  | 'select-point-3d'
  | 'select-window'
  | 'selective-tool'
  | 'send-diagonal'
  | 'send-dollars'
  | 'send-euros'
  | 'send-mail'
  | 'send-pounds'
  | 'send-yens'
  | 'send'
  | 'server-connection'
  | 'server'
  | 'settings-profiles'
  | 'settings'
  | 'share-android'
  | 'share-ios'
  | 'shield-alert'
  | 'shield-alt'
  | 'shield-broken'
  | 'shield-check'
  | 'shield-download'
  | 'shield-eye'
  | 'shield-loading'
  | 'shield-minus'
  | 'shield-plus-in'
  | 'shield-question'
  | 'shield-search'
  | 'shield-upload'
  | 'shield-xmark'
  | 'shield'
  | 'shirt-tank-top'
  | 'shirt'
  | 'shop-four-tiles-window'
  | 'shop-four-tiles'
  | 'shop-window'
  | 'shop'
  | 'shopping-bag-arrow-down'
  | 'shopping-bag-arrow-up'
  | 'shopping-bag-check'
  | 'shopping-bag-minus'
  | 'shopping-bag-plus'
  | 'shopping-bag-pocket'
  | 'shopping-bag-warning'
  | 'shopping-bag'
  | 'shopping-code-check'
  | 'shopping-code-xmark'
  | 'shopping-code'
  | 'short-pants-pockets'
  | 'short-pants'
  | 'shortcut-square'
  | 'shuffle'
  | 'sidebar-collapse'
  | 'sidebar-expand'
  | 'sigma-function'
  | 'simple-cart'
  | 'sine-wave'
  | 'single-tap-gesture'
  | 'skateboard'
  | 'skateboarding'
  | 'skip-next'
  | 'skip-prev'
  | 'slash-square'
  | 'slash'
  | 'sleeper-chair'
  | 'slips'
  | 'small-lamp-alt'
  | 'small-lamp'
  | 'smartphone-device'
  | 'smoking'
  | 'snapchat'
  | 'snow-flake'
  | 'snow'
  | 'soap'
  | 'soccer-ball'
  | 'sofa'
  | 'soil-alt'
  | 'soil'
  | 'sort-down'
  | 'sort-up'
  | 'sort'
  | 'sound-high'
  | 'sound-low'
  | 'sound-min'
  | 'sound-off'
  | 'spades'
  | 'spark'
  | 'sparks'
  | 'sphere'
  | 'spiral'
  | 'split-area'
  | 'split-square-dashed'
  | 'spock-hand-gesture'
  | 'spotify'
  | 'square-3d-corner-to-corner'
  | 'square-3d-from-center'
  | 'square-3d-three-points'
  | 'square-cursor'
  | 'square-dashed'
  | 'square-wave'
  | 'square'
  | 'stackoverflow'
  | 'star-dashed'
  | 'star-half-dashed'
  | 'star'
  | 'stat-down'
  | 'stat-up'
  | 'stats-down-square'
  | 'stats-report'
  | 'stats-up-square'
  | 'strategy'
  | 'stretching'
  | 'strikethrough'
  | 'stroller'
  | 'style-border'
  | 'submit-document'
  | 'substract'
  | 'suggestion'
  | 'suitcase'
  | 'sun-light'
  | 'svg-format'
  | 'sweep-3d'
  | 'swimming'
  | 'swipe-down-gesture'
  | 'swipe-left-gesture'
  | 'swipe-right-gesture'
  | 'swipe-two-fingers-down-gesture'
  | 'swipe-two-fingers-left-gesture'
  | 'swipe-two-fingers-right-gesture'
  | 'swipe-two-fingers-up-gesture'
  | 'swipe-up-gesture'
  | 'switch-off'
  | 'switch-on'
  | 'system-restart'
  | 'system-shut'
  | 'table-2-columns'
  | 'table-rows'
  | 'table'
  | 'task-list'
  | 'telegram-circle'
  | 'telegram'
  | 'temperature-down'
  | 'temperature-high'
  | 'temperature-low'
  | 'temperature-up'
  | 'tennis-ball-alt'
  | 'tennis-ball'
  | 'terminal-tag'
  | 'terminal'
  | 'test-tube'
  | 'text-arrows-up-down'
  | 'text-box'
  | 'text-magnifying-glass'
  | 'text-size'
  | 'text-square'
  | 'text'
  | 'threads'
  | 'three-points-circle'
  | 'three-stars'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'thunderstorm'
  | 'tif-format'
  | 'tiff-format'
  | 'tiktok'
  | 'time-zone'
  | 'timer-off'
  | 'timer'
  | 'tools'
  | 'tournament'
  | 'tower-check'
  | 'tower-no-access'
  | 'tower-warning'
  | 'tower'
  | 'trademark'
  | 'train'
  | 'tram'
  | 'transition-down'
  | 'transition-left'
  | 'transition-right'
  | 'transition-up'
  | 'translate'
  | 'trash'
  | 'treadmill'
  | 'tree'
  | 'trekking'
  | 'trello'
  | 'triangle-flag-circle'
  | 'triangle-flag-two-stripes'
  | 'triangle-flag'
  | 'triangle'
  | 'trophy'
  | 'truck-green'
  | 'truck-length'
  | 'truck'
  | 'tunnel'
  | 'tv-fix'
  | 'tv-warning'
  | 'tv'
  | 'twitter'
  | 'two-points-circle'
  | 'two-seater-sofa'
  | 'type'
  | 'u-turn-arrow-left'
  | 'u-turn-arrow-right'
  | 'umbrella'
  | 'underline-square'
  | 'underline'
  | 'undo-action'
  | 'undo-circle'
  | 'undo'
  | 'union-alt'
  | 'union-horiz-alt'
  | 'union'
  | 'unity-5'
  | 'unity'
  | 'unjoin-3d'
  | 'upload-data-window'
  | 'upload-square'
  | 'upload'
  | 'usb'
  | 'user-badge-check'
  | 'user-bag'
  | 'user-cart'
  | 'user-circle'
  | 'user-crown'
  | 'user-love'
  | 'user-plus'
  | 'user-scan'
  | 'user-square'
  | 'user-star'
  | 'user-xmark'
  | 'user'
  | 'vegan-circle'
  | 'vegan-square'
  | 'vegan'
  | 'vehicle-green'
  | 'vertical-merge'
  | 'vertical-split'
  | 'vials'
  | 'video-camera-off'
  | 'video-camera'
  | 'video-projector'
  | 'view-360'
  | 'view-columns-2'
  | 'view-columns-3'
  | 'view-grid'
  | 'view-structure-down'
  | 'view-structure-up'
  | 'voice-check'
  | 'voice-circle'
  | 'voice-lock-circle'
  | 'voice-scan'
  | 'voice-square'
  | 'voice-xmark'
  | 'voice'
  | 'vr-tag'
  | 'vue-js'
  | 'waist'
  | 'walking'
  | 'wallet'
  | 'warning-circle'
  | 'warning-hexagon'
  | 'warning-square'
  | 'warning-triangle'
  | 'warning-window'
  | 'wash'
  | 'washing-machine'
  | 'watering-soil'
  | 'web-window-energy-consumption'
  | 'web-window-xmark'
  | 'web-window'
  | 'webp-format'
  | 'weight-alt'
  | 'weight'
  | 'white-flag'
  | 'wifi-off'
  | 'wifi-signal-none'
  | 'wifi-tag'
  | 'wifi-warning'
  | 'wifi-xmark'
  | 'wifi'
  | 'wind'
  | 'window-check'
  | 'window-lock'
  | 'window-no-access'
  | 'window-xmark'
  | 'windows'
  | 'wolf'
  | 'wrap-text'
  | 'wrench'
  | 'wristwatch'
  | 'www'
  | 'x-square'
  | 'x'
  | 'xbox-a'
  | 'xbox-b'
  | 'xbox-x'
  | 'xbox-y'
  | 'xmark-circle'
  | 'xmark-square'
  | 'xmark'
  | 'xray-view'
  | 'y-square'
  | 'yelp'
  | 'yen-square'
  | 'yen'
  | 'yoga'
  | 'youtube'
  | 'z-square'
  | 'zoom-in'
  | 'zoom-out'
  | 'adobe-after-effects-solid'
  | 'adobe-illustrator-solid'
  | 'adobe-indesign-solid'
  | 'adobe-lightroom-solid'
  | 'adobe-photoshop-solid'
  | 'adobe-xd-solid'
  | 'airplay-solid'
  | 'alarm-solid'
  | 'align-bottom-box-solid'
  | 'align-horizontal-centers-solid'
  | 'align-horizontal-spacing-solid'
  | 'align-left-box-solid'
  | 'align-right-box-solid'
  | 'align-top-box-solid'
  | 'align-vertical-centers-solid'
  | 'align-vertical-spacing-solid'
  | 'app-notification-solid'
  | 'app-store-solid'
  | 'apple-shortcuts-solid'
  | 'arrow-down-circle-solid'
  | 'arrow-down-left-circle-solid'
  | 'arrow-down-right-circle-solid'
  | 'arrow-down-right-square-solid'
  | 'arrow-left-circle-solid'
  | 'arrow-right-circle-solid'
  | 'arrow-up-circle-solid'
  | 'arrow-up-left-circle-solid'
  | 'arrow-up-left-square-solid'
  | 'arrow-up-right-circle-solid'
  | 'arrow-up-right-square-solid'
  | 'bathroom-solid'
  | 'bitcoin-circle-solid'
  | 'bluetooth-tag-solid'
  | 'bold-square-solid'
  | 'book-solid'
  | 'bookmark-circle-solid'
  | 'bookmark-solid'
  | 'bubble-search-solid'
  | 'bubble-xmark-solid'
  | 'cable-tag-solid'
  | 'camera-solid'
  | 'cash-solid'
  | 'center-align-solid'
  | 'chat-bubble-check-solid'
  | 'chat-bubble-empty-solid'
  | 'chat-bubble-question-solid'
  | 'chat-bubble-translate-solid'
  | 'chat-bubble-warning-solid'
  | 'chat-bubble-xmark-solid'
  | 'chat-bubble-solid'
  | 'chat-lines-solid'
  | 'chat-minus-in-solid'
  | 'chat-plus-in-solid'
  | 'check-circle-solid'
  | 'check-square-solid'
  | 'clock-solid'
  | 'closed-captions-tag-solid'
  | 'cloud-square-solid'
  | 'comp-align-bottom-solid'
  | 'comp-align-left-solid'
  | 'comp-align-right-solid'
  | 'comp-align-top-solid'
  | 'component-solid'
  | 'credit-card-solid'
  | 'database-check-solid'
  | 'database-tag-solid'
  | 'database-xmark-solid'
  | 'database-solid'
  | 'design-nib-solid'
  | 'dogecoin-circle-solid'
  | 'dollar-circle-solid'
  | 'download-circle-solid'
  | 'download-square-solid'
  | 'droplet-solid'
  | 'erase-solid'
  | 'ethereum-circle-solid'
  | 'euro-square-solid'
  | 'eye-solid'
  | 'facetime-solid'
  | 'fileNames.ts'
  | 'fill-color-solid'
  | 'filter-solid'
  | 'flash-solid'
  | 'forward-solid'
  | 'frame-tool-solid'
  | 'fx-tag-solid'
  | 'getFileName.js'
  | 'hd-display-solid'
  | 'headset-bolt-solid'
  | 'headset-warning-solid'
  | 'headset-solid'
  | 'heart-solid'
  | 'help-circle-solid'
  | 'help-square-solid'
  | 'horiz-distribution-left-solid'
  | 'horiz-distribution-right-solid'
  | 'hospital-circle-solid'
  | 'ice-cream-solid'
  | 'info-circle-solid'
  | 'italic-square-solid'
  | 'keyframe-align-center-solid'
  | 'keyframe-align-horizontal-solid'
  | 'keyframe-align-vertical-solid'
  | 'keyframe-minus-in-solid'
  | 'keyframe-minus-solid'
  | 'keyframe-plus-in-solid'
  | 'keyframe-plus-solid'
  | 'keyframe-position-solid'
  | 'keyframe-solid'
  | 'keyframes-couple-solid'
  | 'keyframes-solid'
  | 'label-solid'
  | 'litecoin-circle-solid'
  | 'mail-open-solid'
  | 'mail-solid'
  | 'medal-1st-solid'
  | 'medal-solid'
  | 'message-alert-solid'
  | 'message-text-solid'
  | 'message-solid'
  | 'microphone-check-solid'
  | 'microphone-minus-solid'
  | 'microphone-plus-solid'
  | 'microphone-speaking-solid'
  | 'microphone-warning-solid'
  | 'microphone-solid'
  | 'minus-circle-solid'
  | 'minus-square-solid'
  | 'money-square-solid'
  | 'multi-bubble-solid'
  | 'music-note-plus-solid'
  | 'music-note-solid'
  | 'network-left-solid'
  | 'network-reverse-solid'
  | 'network-right-solid'
  | 'network-solid'
  | 'number-0-square-solid'
  | 'number-1-square-solid'
  | 'number-2-square-solid'
  | 'number-3-square-solid'
  | 'number-4-square-solid'
  | 'number-5-square-solid'
  | 'number-6-square-solid'
  | 'number-7-square-solid'
  | 'number-8-square-solid'
  | 'number-9-square-solid'
  | 'pause-solid'
  | 'percentage-circle-solid'
  | 'percentage-square-solid'
  | 'pin-slash-solid'
  | 'pin-solid'
  | 'play-solid'
  | 'plus-circle-solid'
  | 'plus-square-solid'
  | 'podcast-solid'
  | 'post-solid'
  | 'presentation-solid'
  | 'priority-down-solid'
  | 'priority-high-solid'
  | 'priority-medium-solid'
  | 'priority-up-solid'
  | 'quote-message-solid'
  | 'quote-solid'
  | 'redo-circle-solid'
  | 'refresh-circle-solid'
  | 'reports-solid'
  | 'rewind-solid'
  | 'rhombus-arrow-right-solid'
  | 'send-diagonal-solid'
  | 'send-solid'
  | 'server-connection-solid'
  | 'server-solid'
  | 'share-android-solid'
  | 'skip-next-solid'
  | 'skip-prev-solid'
  | 'spark-solid'
  | 'sparks-solid'
  | 'square-cursor-solid'
  | 'star-solid'
  | 'stats-down-square-solid'
  | 'stats-up-square-solid'
  | 'style-border-solid'
  | 'text-square-solid'
  | 'three-stars-solid'
  | 'timer-solid'
  | 'transition-down-solid'
  | 'transition-left-solid'
  | 'transition-right-solid'
  | 'transition-up-solid'
  | 'trash-solid'
  | 'underline-square-solid'
  | 'undo-circle-solid'
  | 'upload-square-solid'
  | 'usb-solid'
  | 'wallet-solid'
  | 'warning-circle-solid'
  | 'warning-square-solid'
  | 'warning-triangle-solid'
  | 'white-flag-solid'
  | 'wifi-signal-none-solid'
  | 'wifi-tag-solid'
  | 'wifi-warning-solid'
  | 'xmark-circle-solid'
  | 'xmark-square-solid'
  | 'yen-square-solid'