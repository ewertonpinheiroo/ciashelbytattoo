'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Imagens da galeria principal (carrossel)
  const carouselImages = [
    '/imagens/tattoos/galeria_foto_01.png',
    '/imagens/tattoos/galeria_foto_02.png',
    '/imagens/tattoos/galeria_foto_03.png',
  ]

  // Imagens da galeria em grid - formato vertical 1080x1920
  const galleryImages = [
    { src: '/imagens/galeria_foto_01.png', alt: 'Tatuagem Native American', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_02.png', alt: 'Tatuagem Realista', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_03.png', alt: 'Tatuagem Blackwork', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_04.png', alt: 'Tatuagem Geométrica', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_05.png', alt: 'Tatuagem Oriental', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_06.png', alt: 'Tatuagem Mandala', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_07.png', alt: 'Tatuagem Sombreada', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_08.png', alt: 'Tatuagem Artística', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_09.png', alt: 'Tatuagem Fine Line', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_10.png', alt: 'Tatuagem Colorida', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_11.png', alt: 'Tatuagem Tribal', artist: 'Apollo Studio' },
    { src: '/imagens/galeria_foto_12.png', alt: 'Tatuagem Minimalista', artist: 'Apollo Studio' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const nextModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Navegação por teclado no modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      if (e.key === 'ArrowRight') {
        nextModalImage()
      } else if (e.key === 'ArrowLeft') {
        prevModalImage()
      } else if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e5e5e5] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0908]/98 backdrop-blur-xl shadow-2xl border-b border-[#640d14]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-3 animate-fade-in">
              <div className="w-10 h-10 md:w-12 md:h-12 relative group flex-shrink-0">
               
                 
                <div className=" md:w-12 md:h-12  flex items-center justify-center ">
                 <img 
                   src="/imagens/headericon.png" 
                    alt="Apollo Tattoo Logo" 
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
  />
                   </div>
                   
              </div>
              <span className="text-base md:text-xl font-black tracking-tighter">
                APOLLO <span className="text-[#ba181b]">TATTOO</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#galeria" className="hover:text-[#ba181b] transition-colors duration-300 font-medium tracking-wide text-[#e5e5e5]/90 text-sm xl:text-base">GALERIA</a>
              <a href="#agendar" className="hover:text-[#ba181b] transition-colors duration-300 font-medium tracking-wide text-[#e5e5e5]/90 text-sm xl:text-base">AGENDAR</a>
              <a href="#localizacao" className="hover:text-[#ba181b] transition-colors duration-300 font-medium tracking-wide text-[#e5e5e5]/90 text-sm xl:text-base">LOCALIZAÇÃO</a>
              <a href="#sobre" className="hover:text-[#ba181b] transition-colors duration-300 font-medium tracking-wide text-[#e5e5e5]/90 text-sm xl:text-base">SOBRE</a>
              <a
                href="https://wa.me/5592985283893"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#640d14] to-[#ba181b] hover:from-[#ba181b] hover:to-[#640d14] text-[#e5e5e5] px-5 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#640d14]/50 border border-[#ba181b]/50 text-sm xl:text-base"
              >
                CONTATO
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#e5e5e5] focus:outline-none p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-slide-down bg-[#640d14]/95 backdrop-blur-xl rounded-lg mt-2 p-4 border border-[#ba181b]/20">
              <div className="flex flex-col space-y-3">
                <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ba181b] transition-colors text-[#e5e5e5]/90 py-2 font-medium">GALERIA</a>
                <a href="#agendar" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ba181b] transition-colors text-[#e5e5e5]/90 py-2 font-medium">AGENDAR</a>
                <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ba181b] transition-colors text-[#e5e5e5]/90 py-2 font-medium">LOCALIZAÇÃO</a>
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ba181b] transition-colors text-[#e5e5e5]/90 py-2 font-medium">SOBRE</a>
                <a
                  href="https://wa.me/5592985283893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#640d14] to-[#ba181b] text-[#e5e5e5] px-6 py-3 rounded-full text-center font-bold border border-[#ba181b]/50"
                >
                  CONTATO
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

 {/* Hero Section with Video Background - Versão Atualizada com Logo Grande */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/000.mp4" type="video/mp4" />
    </video>

    {/* Overlay ajustado: menos escuro para destacar as cores/tatuagens do vídeo */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/60 via-[#0a0908]/45 to-[#0a0908]/65"></div>

    {/* Vinheta mais suave */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,9,8,0.25)_100%)]"></div>

    {/* Gradiente vermelho sutil mantido, mas mais leve */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#640d14]/8 via-transparent to-transparent"></div>

    {/* Pattern overlay sutil (mantido baixo para não competir com o vídeo) */}
    <div className="absolute inset-0 opacity-[0.04]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e5e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    {/* Linha decorativa superior */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-20 flex flex-col items-center justify-center h-full">
    <div className="animate-fade-in-up w-full max-w-5xl">
      {/* Badge decorativo (mantido no topo) */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#640d14]/35 backdrop-blur-lg border border-[#ba181b]/40 mb-8 md:mb-12 shadow-lg">
        <div className="w-2.5 h-2.5 bg-[#ba181b] rounded-full animate-pulse"></div>
        <span className="text-[#e5e5e5]/90 text-sm md:text-base font-semibold tracking-widest uppercase">ESTÚDIO PROFISSIONAL</span>
      </div>

      {/* Logo principal - grande, centralizada e elegante */}
      <div className="relative mb-10 md:mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ba181b]/20 via-transparent to-[#640d14]/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        
        <div className="relative">
          <Image
            src="/imagens/apollologo.png"
            alt="Apollo Tattoo - Logo Principal"
            width={1200}          // ajuste se sua logo for muito larga/quadrada
            height={400}          // mantenha proporção real da sua logo (ex: se for 3:1, use width maior)
            className="mx-auto w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[50%] drop-shadow-2xl transition-all duration-700 hover:scale-[1.03]"
            priority
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 75vw, 55vw"
          />
        </div>
      </div>

      {/* Subtítulo / slogan curto abaixo da logo (opcional, mas ajuda SEO e reforça a marca) */}
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-10 md:mb-14 text-[#e5e5e5]/90 tracking-wide max-w-4xl mx-auto leading-relaxed">
        Tatuagens projetadas com precisão e executadas com excelência
      </p>

      {/* Botões CTA - mantidos, mas com espaçamento melhor */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up">
        <a
          href="#galeria"
          className="w-full sm:w-auto bg-gradient-to-r from-[#640d14] to-[#ba181b] hover:from-[#ba181b] hover:to-[#640d14] text-[#e5e5e5] px-10 md:px-12 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl tracking-wide transition-all duration-400 transform hover:scale-105 shadow-xl hover:shadow-[#ba181b]/40 border border-[#ba181b]/60"
        >
          VER GALERIA DE TRABALHOS
        </a>
        <a
          href="#agendar"
          className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl tracking-wide transition-all duration-400 transform hover:scale-105 border-2 border-[#ba181b] hover:bg-[#ba181b]/10 backdrop-blur-sm text-[#e5e5e5]"
        >
          AGENDAR AGORA
        </a>
      </div>
    </div>

    {/* Scroll Indicator - mantido */}
   
  </div>
</section>

      {/* Gallery Section - REFORMULADA COM GRID PROFISSIONAL */}
      <section id="galeria" className="py-12 md:py-20 lg:py-24 bg-[#0a0908] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">NOSSOS </span>
              <span className="text-[#ba181b]">TRABALHOS</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#640d14] to-transparent mx-auto mb-3 md:mb-4"></div>
            <p className="text-[#e5e5e5]/70 text-base md:text-lg max-w-2xl mx-auto px-4">
              Portfólio com trabalhos exclusivos e personalizados
            </p>
          </div>

          {/* Grid Profissional Estilo Pinterest/Masonry - Verticais 9:16 */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {galleryImages.map((image, index) => (
              <Dialog.Root 
                key={index} 
                open={selectedImage === index} 
                onOpenChange={(open) => setSelectedImage(open ? index : null)}
              >
                <Dialog.Trigger asChild>
                  <div className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3 md:mb-4">
                    {/* Container com aspect ratio 9:16 */}
                    <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Info overlay - aparece no hover */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="space-y-1">
                          <h3 className="text-white font-bold text-sm md:text-base line-clamp-1">
                            {image.alt}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm">
                            {image.artist}
                          </p>
                        </div>
                      </div>

                      {/* Zoom icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ba181b] rounded-full flex items-center justify-center border-2 border-white shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Trigger>

                {/* Modal do Radix UI - Apenas imagem ampliada */}
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm data-[state=open]:animate-fade-in" />
                  <Dialog.Content className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                    {/* Título acessível (oculto visualmente) */}
                    <Dialog.Title className="sr-only">
                      {galleryImages[selectedImage || 0].alt}
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Visualização ampliada da imagem {(selectedImage || 0) + 1} de {galleryImages.length}
                    </Dialog.Description>
                    
                    <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
                      
                      {/* Botão Fechar */}
                      <Dialog.Close className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-[#640d14] hover:bg-[#ba181b] rounded-full flex items-center justify-center transition-all duration-300 border-2 border-[#ba181b] z-50 group">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Dialog.Close>

                      {/* Navegação Anterior */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevModalImage()
                        }}
                        className="absolute left-2 md:left-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#640d14]/90 hover:bg-[#ba181b] backdrop-blur-sm rounded-full border-2 border-[#ba181b] flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      >
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Imagem Principal - Ampliada */}
                      <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                        <div className="relative h-full" style={{ aspectRatio: '9/16', maxHeight: '85vh' }}>
                          <Image
                            src={galleryImages[selectedImage || 0].src}
                            alt={galleryImages[selectedImage || 0].alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 85vw"
                            priority
                          />
                        </div>
                      </div>

                      {/* Navegação Próximo */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextModalImage()
                        }}
                        className="absolute right-2 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#640d14]/90 hover:bg-[#ba181b] backdrop-blur-sm rounded-full border-2 border-[#ba181b] flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      >
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:translate-x-[2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Contador de imagens */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#640d14]/95 backdrop-blur-md rounded-full px-4 py-2 border border-[#ba181b]/50">
                        <p className="text-[#e5e5e5] text-sm md:text-base font-medium">
                          {(selectedImage || 0) + 1} / {galleryImages.length}
                        </p>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>

          {/* CTA para Instagram */}
          <div className="mt-12 md:mt-16 text-center">
            <a
              href="https://www.instagram.com/apollotattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#640d14] to-[#ba181b] hover:from-[#ba181b] hover:to-[#640d14] text-[#e5e5e5] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#640d14]/50 border border-[#ba181b]/50"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              VER MAIS NO INSTAGRAM
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
      </section>

      {/* Agendar Section - REFORMULADA */}
      <section id="agendar" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#0a0908] via-[#640d14]/10 to-[#0a0908] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ba181b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#640d14]/30 backdrop-blur-md border border-[#ba181b]/30 mb-6">
              <div className="w-2 h-2 bg-[#ba181b] rounded-full animate-pulse"></div>
              <span className="text-[#e5e5e5]/80 text-xs md:text-sm font-medium tracking-wider">ATENDIMENTO RÁPIDO</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">FAÇA SEU </span>
              <span className="block text-[#ba181b] mt-2">ORÇAMENTO</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-[#e5e5e5]/80 max-w-3xl mx-auto font-light leading-relaxed">
              Entre em contato agora e transforme sua ideia em arte
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] via-[#ba181b] to-[#640d14] rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#640d14] to-[#ba181b] p-1 rounded-3xl">
                <div className="bg-[#0a0908] rounded-3xl p-8 md:p-12 lg:p-16">
                  <div className="text-center">
                    {/* WhatsApp Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 md:mb-8 shadow-2xl shadow-green-500/50 transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-[#e5e5e5] mb-4">
                      FALE DIRETO COM O TATUADOR
                    </h3>
                    
                    <p className="text-base md:text-xl text-[#e5e5e5]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Tire suas dúvidas, envie referências e receba um orçamento personalizado em minutos
                    </p>

                    {/* Número WhatsApp em Destaque */}
                    <div className="inline-flex items-center gap-3 bg-[#640d14]/50 backdrop-blur-sm border-2 border-[#ba181b]/50 rounded-2xl px-6 md:px-8 py-4 mb-8">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="text-2xl md:text-3xl font-black text-[#e5e5e5]">(92) 98528-3893</span>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://wa.me/5592985283893"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 md:px-14 py-5 md:py-7 rounded-full font-black text-lg md:text-2xl tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400"
                    >
                      <svg className="w-7 h-7 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      FAZER ORÇAMENTO AGORA
                    </a>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 pt-8 border-t border-[#ba181b]/30">
                      <div className="flex items-center gap-2 text-[#e5e5e5]/70">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm md:text-base font-medium">Resposta rápida</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#e5e5e5]/70">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm md:text-base font-medium">Orçamento grátis</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#e5e5e5]/70">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm md:text-base font-medium">Sem compromisso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Horário */}
            <div className="bg-[#640d14]/50 backdrop-blur-sm border border-[#ba181b]/30 rounded-2xl p-6 hover:border-[#ba181b] transition-all group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center mb-4 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                  <svg className="w-7 h-7 text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#e5e5e5] mb-3">HORÁRIO</h3>
                <p className="text-[#e5e5e5]/70 text-sm leading-relaxed">
                  Seg-Sex: 10h-20h<br />
                  Sáb: 10h-18h<br />
                  Dom: Fechado
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-[#640d14]/50 backdrop-blur-sm border border-[#ba181b]/30 rounded-2xl p-6 hover:border-[#ba181b] transition-all group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center mb-4 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                  <svg className="w-7 h-7 text-[#e5e5e5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#e5e5e5] mb-3">INSTAGRAM</h3>
                <p className="text-[#e5e5e5]/70 text-sm mb-3">@apollotattoo</p>
                <a 
                  href="https://www.instagram.com/apltattoo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ba181b] hover:text-[#ba181b]/80 transition-colors text-sm font-medium"
                >
                  Seguir perfil →
                </a>
              </div>
            </div>

            {/* Email/Outro contato */}
            <div className="bg-[#640d14]/50 backdrop-blur-sm border border-[#ba181b]/30 rounded-2xl p-6 hover:border-[#ba181b] transition-all group sm:col-span-2 lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center mb-4 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                  <svg className="w-7 h-7 text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#e5e5e5] mb-3">LOCALIZAÇÃO</h3>
                <p className="text-[#e5e5e5]/70 text-sm leading-relaxed">
                  Av. Barrassano<br />
                  Cidade Nova, Manaus - AM
                </p>
                <a 
                  href="#localizacao"
                  className="mt-3 text-[#ba181b] hover:text-[#ba181b]/80 transition-colors text-sm font-medium"
                >
                  Ver mapa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-12 md:py-20 lg:py-24 bg-[#0a0908] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">NOSSA </span>
              <span className="text-[#ba181b]">LOCALIZAÇÃO</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#640d14] to-transparent mx-auto mb-3 md:mb-4"></div>
            <p className="text-[#e5e5e5]/70 text-base md:text-lg max-w-2xl mx-auto px-4">
              Visite nosso estúdio profissional em Manaus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Endereço Info */}
            <div className="space-y-4 md:space-y-6 animate-fade-in-left">
              <div className="bg-[#640d14] p-6 md:p-8 rounded-2xl border-2 border-[#ba181b]/40 hover:border-[#ba181b] transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ba181b]">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2">Endereço</h3>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base break-words">
                      Av. Barrassano<br />
                      Cidade Nova, Manaus - AM<br />
                      CEP: 69095-220
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Barrassano+Cidade+Nova+Manaus+AM+69095-220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ba181b] hover:bg-[#640d14] text-[#e5e5e5] px-6 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  ABRIR NO MAPS
                </a>
              </div>

              <div className="bg-[#640d14] p-6 md:p-8 rounded-2xl border-2 border-[#ba181b]/40">
                <h4 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-4">Como Chegar</h4>
                <ul className="space-y-3 text-[#e5e5e5]/70 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ba181b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fácil acesso pela Av. Barrassano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ba181b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Próximo aos principais pontos da Cidade Nova</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ba181b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estacionamento disponível</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mapa */}
            <div className="animate-fade-in-right">
              <div className="relative group h-full min-h-[300px] md:min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-[#640d14]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-60.0294%2C-3.0891%2C-60.0094%2C-3.0691&layer=mapnik&marker=-3.0791,-60.0194"
                    width="100%"
                    height="100%"
                    className="min-h-[300px] md:min-h-[400px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Localização APOLLO TATTOO"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
      </section>

      {/* Sobre Section - Versão Atualizada e Mais Elegante */}
<section id="sobre" className="py-16 md:py-24 lg:py-32 bg-[#0a0908] relative overflow-hidden">
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ba181b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
        <span className="text-[#e5e5e5]">CONHEÇA O </span>
        <span className="bg-gradient-to-r from-[#ba181b] to-[#640d14] bg-clip-text text-transparent">APOLLO</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ba181b] to-transparent mx-auto mt-6"></div>
    </div>

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Foto do tatuador - lado esquerdo em desktop */}
      <div className="lg:col-span-5 relative animate-fade-in-left order-1">
        <div className="relative mx-auto max-w-[380px] lg:max-w-none">
          {/* Efeito de glow / moldura externa */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ba181b]/30 via-[#640d14]/20 to-transparent rounded-full blur-2xl opacity-70"></div>
          
          {/* Container da foto */}
          <div className="relative rounded-full overflow-hidden border-4 border-[#ba181b]/40 hover:border-[#ba181b] transition-all duration-500 group shadow-2xl shadow-black/60">
            <div className="aspect-square relative">
              <Image
                src="/imagens/apolloperfil2.png"
                alt="Apollo - Tatuador Apollo Tattoo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
            
            {/* Overlay sutil com nome */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
              <span className="text-[#e5e5e5] font-bold tracking-wider text-lg drop-shadow-md">
                APOLLO
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo textual - lado direito em desktop */}
      <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#e5e5e5] leading-tight">
          Arte que conta sua história
        </h3>
        
        <div className="space-y-5 text-lg md:text-xl text-[#e5e5e5]/85 leading-relaxed">
          <p>
            Sou <strong className="text-[#ba181b] font-bold">Apollo</strong>, tatuador há mais de {new Date().getFullYear() - 2018} anos, apaixonado por criar peças únicas, limpas e com significado profundo.
          </p>
          
          <p>
            No <strong>Apollo Tattoo</strong> cada projeto é tratado como uma obra de arte exclusiva: do primeiro esboço até o último detalhe na pele. 
            Trabalho com foco em realismo, blackwork, neotradicional, geométrico e composição personalizada.
          </p>
          
          <p className="font-medium italic text-[#ba181b]/90">
            "Minha missão é transformar sua ideia em uma tatuagem que você terá orgulho de carregar pelo resto da vida."
          </p>
        </div>

        {/* Assinatura + selo de qualidade */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#640d14] to-[#ba181b] flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-lg">
              A
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black tracking-tight">Apollo</div>
              <div className="text-[#e5e5e5]/60 text-sm md:text-base">Proprietário & Tatuador Principal</div>
            </div>
          </div>

          <div className="flex gap-6 text-sm md:text-base">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#ba181b]">500+</div>
              <div className="text-[#e5e5e5]/60">Tatuagens realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#ba181b]">100%</div>
              <div className="text-[#e5e5e5]/60">Higienização premium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Process Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">NOSSO </span>
              <span className="text-[#ba181b]">PROCESSO</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#640d14] to-transparent mx-auto mb-3 md:mb-4"></div>
            <p className="text-[#e5e5e5]/70 text-base md:text-lg max-w-2xl mx-auto px-4">
              Do conceito à arte finalizada em sua pele
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                number: '01',
                title: 'Consulta',
                description: 'Conversamos sobre sua ideia e criamos o conceito perfeito'
              },
              {
                number: '02',
                title: 'Design',
                description: 'Desenvolvemos um design personalizado que reflete sua visão'
              },
              {
                number: '03',
                title: 'Aprovação',
                description: 'Você aprova cada detalhe antes de começarmos'
              },
              {
                number: '04',
                title: 'Execução',
                description: 'Transformamos o design em realidade com precisão'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#640d14] p-6 md:p-8 rounded-2xl border-2 border-[#ba181b]/30 hover:border-[#ba181b] transition-all h-full">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ba181b]/20 mb-3 md:mb-4 group-hover:text-[#ba181b]/40 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#e5e5e5] mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-[#e5e5e5]/70 leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-[#0a0908] border-t border-[#640d14]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#640d14] rounded-full border-2 border-[#ba181b] flex items-center justify-center">
                  <span className="text-[#e5e5e5] font-black text-sm md:text-lg">A</span>
                </div>
              </div>
              <span className="text-lg md:text-xl font-black tracking-tighter">
                APOLLO <span className="text-[#ba181b]">TATTOO</span>
              </span>
            </div>
            <p className="text-[#e5e5e5]/50 mb-4 md:mb-6 text-sm md:text-base">Transforme sua ideia em arte eterna</p>
            <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-6">
              <a href="https://wa.me/5592985283893" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e5]/40 hover:text-[#ba181b] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://instagram.com/apollotattoo" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e5]/40 hover:text-[#ba181b] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-[#e5e5e5]/30 text-xs md:text-sm">
              © 2026 APOLLO TATTOO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5592985283893"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce-slow border-2 border-green-400"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Screen reader only - para acessibilidade */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}