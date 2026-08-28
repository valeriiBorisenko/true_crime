import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { content } from '../../data/content'
import faustVideo from '../../img/Faust_9x16.mp4'

function GameFrame() {
  const videoRef = useRef(null)
  const volumeRef = useRef(1)
  const soundUnlockedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSoundUnlocked, setIsSoundUnlocked] = useState(false)
  const [volume, setVolume] = useState(1)

  volumeRef.current = volume

  const applyVolume = (video, nextVolume) => {
    video.volume = nextVolume
    video.muted = !soundUnlockedRef.current || nextVolume === 0
  }

  const playVideo = async () => {
    const video = videoRef.current
    if (!video) return

    applyVolume(video, volumeRef.current)

    try {
      await video.play()
    } catch {
      video.muted = true
      await video.play().catch(() => {})
    }
  }

  const playVideoRef = useRef(playVideo)
  playVideoRef.current = playVideo

  const togglePlayback = (event) => {
    if (event?.target?.closest('.game-frame__volume')) {
      return
    }

    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      playVideo()
      return
    }

    video.pause()
  }

  const unlockSound = (event) => {
    if (!event.isTrusted) return

    const video = videoRef.current
    if (!video) return

    soundUnlockedRef.current = true
    setIsSoundUnlocked(true)
    applyVolume(video, volumeRef.current)
    playVideo()
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const syncPlayback = () => {
      setIsPlaying(!video.paused)
    }

    playVideoRef.current()

    video.addEventListener('play', syncPlayback)
    video.addEventListener('pause', syncPlayback)

    return () => {
      video.removeEventListener('play', syncPlayback)
      video.removeEventListener('pause', syncPlayback)
    }
  }, [])

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value)
    volumeRef.current = nextVolume
    setVolume(nextVolume)

    const video = videoRef.current
    if (!video) return

    applyVolume(video, nextVolume)
  }

  const { title, playLabel, pauseLabel, volumeLabel } = content.gameFrame
  const showSoundWaves = volume > 0

  return (
    <div className="game-frame">
      {!isSoundUnlocked
        ? createPortal(
            <div
              className="game-frame__sound-unlock"
              onClick={unlockSound}
              aria-hidden="true"
            />,
            document.body,
          )
        : null}
      <div className="game-frame__stage" onClick={togglePlayback}>
        <video
          ref={videoRef}
          className="game-frame__video"
          src={faustVideo}
          title={title}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="game-frame__controls">
          <button
            type="button"
            className="game-frame__play"
            onClick={(event) => {
              event.stopPropagation()
              togglePlayback(event)
            }}
            aria-label={isPlaying ? pauseLabel : playLabel}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="4" width="5" height="16" rx="1" />
                <rect x="14" y="4" width="5" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 4.5v15l13-7.5L7 4.5z" />
              </svg>
            )}
          </button>
          <label className="game-frame__volume">
            <span className="visually-hidden">{volumeLabel}</span>
            <svg className="game-frame__volume-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9h3.2L12 5.5v13L7.2 15H4V9z" />
              {showSoundWaves ? (
                <path d="M15.2 8.4a5 5 0 0 1 0 7.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
              ) : null}
              {showSoundWaves && volume > 0.5 ? (
                <path d="M17.8 6a8 8 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" />
              ) : null}
            </svg>
            <input
              className="game-frame__volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default GameFrame
