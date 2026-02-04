'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Imagens da galeria - CORRIGIDO: removido "public/" dos caminhos
  const galleryImages = [
    '/imagens/tattoos/galeria_foto_01.png',
    '/imagens/tattoos/galeria_foto_02.png',
    '/imagens/tattoos/galeria_foto_03.png',
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
      setActiveImage((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e5e5e5] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0908]/98 backdrop-blur-xl shadow-2xl border-b border-[#640d14]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-3 animate-fade-in">
              <div className="w-10 h-10 md:w-12 md:h-12 relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-[#640d14] rounded-full border-2 border-[#ba181b] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-[#e5e5e5] font-black text-base md:text-xl">A</span>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background with animated pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0908] via-[#161a1d] to-[#0a0908]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#640d14]/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e5e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#640d14] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-20">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 md:mb-6 tracking-tighter leading-tight">
              <span className="block text-[#e5e5e5] drop-shadow-2xl">APOLLO</span>
              <span className="block bg-gradient-to-r from-[#640d14] via-[#ba181b] to-[#640d14] bg-clip-text text-transparent drop-shadow-2xl">
                TATTOO
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 text-[#e5e5e5]/70 tracking-wide max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
              TATUAGENS PROJETADAS 
              <span className="block mt-2 font-bold text-[#ba181b]"> E BEM EXECUTADAS</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              <a
                href="#galeria"
                className="w-full sm:w-auto bg-gradient-to-r from-[#640d14] to-[#ba181b] hover:from-[#ba181b] hover:to-[#640d14] text-[#e5e5e5] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#640d14]/50 border border-[#ba181b]/50"
              >
                VER TRABALHOS
              </a>
              <a
                href="#agendar"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 border-2 border-[#640d14] hover:bg-[#640d14]/20 backdrop-blur-sm"
              >
                AGENDAR AGORA
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
            <div className="w-6 h-10 border-2 border-[#640d14] rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-[#640d14] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - ATUALIZADA COM CARROSSEL HORIZONTAL */}
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
              Confira nossa galeria com trabalhos exclusivos e personalizados
            </p>
          </div>

          {/* Carrossel Horizontal Principal */}
          <div className="relative mb-6 md:mb-8 animate-fade-in group">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#640d14]/20 via-transparent to-[#ba181b]/10 z-10 pointer-events-none"></div>
              
              {/* Bordas decorativas */}
              <div className="absolute inset-0 border-2 border-[#640d14]/60 rounded-2xl z-20 group-hover:border-[#ba181b] transition-colors pointer-events-none"></div>
              <div className="absolute inset-2 border border-[#ba181b]/30 rounded-xl z-20 pointer-events-none"></div>

              {/* Imagens do carrossel */}
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === activeImage 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Trabalho de tatuagem ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              ))}

              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-[#640d14]/90 hover:bg-[#ba181b] backdrop-blur-sm rounded-full border-2 border-[#ba181b] flex items-center justify-center transition-all duration-300 transform hover:scale-110 group/btn"
                aria-label="Imagem anterior"
              >
                <svg className="w-6 h-6 text-[#e5e5e5] group-hover/btn:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-[#640d14]/90 hover:bg-[#ba181b] backdrop-blur-sm rounded-full border-2 border-[#ba181b] flex items-center justify-center transition-all duration-300 transform hover:scale-110 group/btn"
                aria-label="Próxima imagem"
              >
                <svg className="w-6 h-6 text-[#e5e5e5] group-hover/btn:translate-x-[2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores de navegação */}
              <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:gap-3 bg-[#0a0908]/60 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-full border border-[#640d14]/50">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeImage 
                        ? 'bg-[#ba181b] w-8 md:w-10 h-3 md:h-3.5 shadow-lg shadow-[#ba181b]/50' 
                        : 'bg-[#e5e5e5]/40 hover:bg-[#e5e5e5]/60 w-3 md:w-3.5 h-3 md:h-3.5'
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de imagens */}
              <div className="absolute top-6 right-6 z-30 bg-[#0a0908]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#640d14]/50">
                <span className="text-[#e5e5e5] font-bold text-sm md:text-base">
                  {activeImage + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Miniaturas - Grid Horizontal */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                  index === activeImage 
                    ? 'ring-4 ring-[#ba181b] scale-105 shadow-2xl shadow-[#ba181b]/50' 
                    : 'ring-2 ring-[#640d14]/40 hover:ring-[#ba181b] hover:scale-105'
                }`}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  
                  {/* Overlay com efeito hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#640d14]/80 via-transparent to-transparent transition-opacity ${
                    index === activeImage ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                  }`}></div>

                  {/* Indicador de imagem ativa */}
                  {index === activeImage && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#640d14]/30 backdrop-blur-[1px]">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ba181b] rounded-full flex items-center justify-center border-4 border-[#e5e5e5] shadow-2xl">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#e5e5e5]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Label da imagem */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0908] to-transparent p-3 md:p-4">
                  <p className="text-[#e5e5e5] font-bold text-xs md:text-sm text-center">
                    Trabalho {index + 1}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CTA para mais trabalhos */}
          <div className="mt-8 md:mt-12 text-center">
            <a
              href="https://instagram.com/apollotattoo"
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

      {/* Agendar Section */}
      <section id="agendar" className="py-12 md:py-20 lg:py-24 bg-[#0a0908] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">AGENDE SUA </span>
              <span className="text-[#ba181b]">TATTOO</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#640d14] to-transparent mx-auto mb-3 md:mb-4"></div>
            <p className="text-[#e5e5e5]/70 text-base md:text-lg max-w-2xl mx-auto px-4">
              Entre em contato e transforme sua ideia em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-4 md:space-y-6 animate-fade-in-left">
              <div className="bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:text-[#0a0908] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2">WhatsApp</h3>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base break-words">(92) 98528-3893</p>
                    <a 
                      href="https://wa.me/5592985283893" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#ba181b] hover:text-[#ba181b]/80 transition-colors text-sm md:text-base font-medium"
                    >
                      Enviar mensagem →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:text-[#0a0908] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2">Horário</h3>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base">Segunda a Sexta: 10h - 20h</p>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base">Sábado: 10h - 18h</p>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ba181b]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ba181b] group-hover:bg-[#ba181b] transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#e5e5e5] group-hover:text-[#0a0908] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2">Instagram</h3>
                    <p className="text-[#e5e5e5]/70 text-sm md:text-base break-words">@apollotattoo</p>
                    <a 
                      href="https://instagram.com/apollotattoo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#ba181b] hover:text-[#ba181b]/80 transition-colors text-sm md:text-base font-medium"
                    >
                      Seguir perfil →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="animate-fade-in-right">
              <div className="relative h-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-xl md:rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative h-full bg-[#640d14] p-8 md:p-12 rounded-xl md:rounded-2xl border-2 border-[#ba181b] flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#ba181b]/20 rounded-full flex items-center justify-center mb-6 md:mb-8 border-2 border-[#ba181b] group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-[#e5e5e5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e5e5e5] mb-3 md:mb-4">Pronto para começar?</h3>
                  <p className="text-[#e5e5e5]/70 text-base md:text-lg mb-6 md:mb-8 px-4">
                    Entre em contato agora e agende sua sessão. Estamos prontos para criar algo incrível!
                  </p>
                  <a
                    href="https://wa.me/5592985283893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ba181b] to-[#640d14] hover:from-[#640d14] hover:to-[#ba181b] text-[#e5e5e5] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#640d14]/50 border border-[#ba181b]/50"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    AGENDAR AGORA
                  </a>
                </div>
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
              <div className="bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/40 hover:border-[#ba181b] transition-all">
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

              <div className="bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/40">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-xl md:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden border-2 border-[#640d14]">
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

      {/* Sobre Section */}
      <section id="sobre" className="py-12 md:py-20 lg:py-24 bg-[#0a0908] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
              <span className="text-[#e5e5e5]">SOBRE O </span>
              <span className="text-[#ba181b]">ESTÚDIO</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#640d14] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in-left order-2 md:order-1">
              <p className="text-base md:text-lg text-[#e5e5e5]/80 leading-relaxed">
                Na <span className="text-[#e5e5e5] font-bold">APOLLO TATTOO</span>, somos mais do que um estúdio - 
                somos uma equipe dedicada a transformar suas ideias em arte permanente de alta qualidade.
              </p>
              <p className="text-base md:text-lg text-[#e5e5e5]/80 leading-relaxed">
                Com anos de experiência e paixão pela arte corporal, criamos tatuagens únicas que contam histórias 
                e expressam personalidades. Cada trabalho é executado com precisão técnica e sensibilidade artística.
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8">
                <div className="text-center p-4 md:p-6 bg-[#640d14] rounded-lg md:rounded-xl border border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                  <div className="text-3xl md:text-4xl font-black text-[#ba181b] mb-1 md:mb-2 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-xs md:text-sm text-[#e5e5e5]/70">Tattoos</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-[#640d14] rounded-lg md:rounded-xl border border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                  <div className="text-3xl md:text-4xl font-black text-[#ba181b] mb-1 md:mb-2 group-hover:scale-110 transition-transform">5+</div>
                  <div className="text-xs md:text-sm text-[#e5e5e5]/70">Anos</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-[#640d14] rounded-lg md:rounded-xl border border-[#ba181b]/30 hover:border-[#ba181b] transition-all group">
                  <div className="text-3xl md:text-4xl font-black text-[#ba181b] mb-1 md:mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-xs md:text-sm text-[#e5e5e5]/70">Qualidade</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14] to-[#ba181b] rounded-xl md:rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/40 hover:border-[#ba181b] transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#e5e5e5]">Nossos Diferenciais</h3>
                  <ul className="space-y-3 md:space-y-4">
                    {[
                      'Artistas experientes e talentosos',
                      'Ambiente higienizado e seguro',
                      'Materiais descartáveis e esterilizados',
                      'Atendimento personalizado',
                      'Variedade de estilos e técnicas',
                      'Acompanhamento pós-tattoo'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ba181b]/20 border border-[#ba181b] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#ba181b] transition-colors">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#e5e5e5] group-hover/item:text-[#0a0908] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#e5e5e5]/80 group-hover/item:text-[#e5e5e5] transition-colors text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#640d14]/20 to-transparent rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#640d14] p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#ba181b]/30 hover:border-[#ba181b] transition-all h-full">
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

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}