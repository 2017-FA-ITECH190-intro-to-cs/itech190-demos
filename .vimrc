et nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim/
call vundle#begin('~/.vim/bundle/')

" set rtp+=$HOME/.vim/bundle/Vundle.vim/
" call vundle#begin('$HOME/vimfiles/bundle/')

Plugin 'gmarik/Vundle.vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'mileszs/ack.vim'
Plugin 'mattn/emmet-vim'
Plugin 'godlygeek/tabular'
Plugin 'plasticboy/vim-markdown'
Plugin 'tpope/vim-surround'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'junegunn/goyo.vim'
Plugin 'tomtom/tcomment_vim'
Plugin 'easymotion/vim-easymotion'
Plugin 'dhruvasagar/vim-table-mode'
Plugin 'altercation/vim-colors-solarized'
Plugin 'sjl/badwolf'
Plugin 'reedes/vim-colors-pencil'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'Lokaltog/vim-distinguished'
Plugin 'tpope/vim-fugitive'
Plugin 'alvan/vim-closetag'
Plugin 'tpope/vim-repeat'

call vundle#end()

filetype plugin indent on

set tabstop=4

set shiftwidth=4

set expandtab

syntax on

set number
set relativenumber

set autoindent

set ruler

set mouse=a

set wrap
set linebreak
set nolist
set textwidth=0
set wrapmargin=0


nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

"Disable arrow keys
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>

imap <up> <nop>
imap <down> <nop>
imap <left> <nop>
imap <right> <nop>
set wildmenu

inoremap jk <ESC>

let mapleader = "\<Space>"

" Don't offer to open certain files/directories
set wildignore+=*.bmp,*.gif,*.ico,*.jpg,*.png,*.ico
set wildignore+=*.pdf,*.psd
set wildignore+=node_modules/*,bower_components/*

set background=dark
colorscheme distinguished

let g:airline_theme='solarized'
let g:vim_markdown_folding_disabled = 1

set backspace=indent,eol,start

set autochdir

" netrw
let g:netrw_browse_split = 2
let g:netrw_winsize = 25
let g:netrw_banner = 0
let g:netrw_altv = 1

" filenames for close tag
let g:closetag_filenames = "*.html, *.xhtml, *.phtml, *.md"
