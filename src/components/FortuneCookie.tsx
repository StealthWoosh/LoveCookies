"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sparkles, RefreshCw, Heart } from "lucide-react";

interface LoveMessage {
  quote: string;
  numbers: number[];
}

const loveMessages: LoveMessage[] = [
  {
    quote:
      "Love is not about finding the perfect person, but learning to see an imperfect person perfectly.",
    numbers: [7, 14, 23, 31, 42, 56],
  },
  {
    quote:
      "In your smile, I see something more beautiful than the stars.",
    numbers: [3, 18, 27, 35, 49, 63],
  },
  {
    quote:
      "You are my today and all of my tomorrows.",
    numbers: [9, 16, 24, 38, 47, 55],
  },
  {
    quote: "Every love story is beautiful, but ours is my favorite.",
    numbers: [2, 11, 29, 33, 44, 51],
  },
  {
    quote:
      "I love you not only for what you are, but for what I am when I am with you.",
    numbers: [5, 12, 21, 36, 43, 58],
  },
  {
    quote:
      "You are the source of my joy, the center of my world, and the whole of my heart.",
    numbers: [1, 19, 26, 34, 41, 62],
  },
  {
    quote:
      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    numbers: [8, 15, 22, 37, 46, 59],
  },
  {
    quote: "The best thing to hold onto in life is each other.",
    numbers: [4, 13, 25, 32, 48, 57],
  },
  {
    quote: "I have found the one whom my soul loves.",
    numbers: [6, 17, 28, 39, 45, 61],
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    numbers: [10, 20, 30, 40, 50, 60],
  },
  {
    quote: "You are my sun, my moon, and all of my stars.",
    numbers: [12, 24, 36, 41, 53, 65],
  },
  {
    quote: "I choose you. And I'll choose you over and over. Without pause, without doubt, in a heartbeat. I'll keep choosing you.",
    numbers: [14, 28, 35, 49, 56, 63],
  },
  {
    quote: "Whatever our souls are made of, yours and mine are the same.",
    numbers: [1, 8, 15, 22, 29, 36],
  },
  {
    quote: "When I saw you I fell in love, and you smiled because you knew.",
    numbers: [3, 9, 18, 27, 45, 54],
  },
  {
    quote: "You are every reason, every hope, and every dream I've ever had.",
    numbers: [7, 21, 28, 42, 49, 56],
  },
  {
    quote: "I love you more than I have ever found a way to say to you.",
    numbers: [11, 22, 33, 44, 55, 66],
  },
  {
    quote: "My heart is and always will be yours.",
    numbers: [2, 13, 24, 35, 46, 57],
  },
  {
    quote: "You are the finest, loveliest, tenderest person I have ever known.",
    numbers: [16, 32, 48, 64, 17, 33],
  },
  {
    quote: "I would rather spend one lifetime with you than face all the ages of this world alone.",
    numbers: [5, 10, 25, 40, 55, 65],
  },
  {
    quote: "To love and be loved is to feel the sun from both sides.",
    numbers: [9, 18, 36, 45, 54, 63],
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    numbers: [4, 8, 16, 32, 48, 52],
  },
  {
    quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    numbers: [6, 12, 24, 30, 42, 60],
  },
  {
    quote: "The greatest happiness of life is the conviction that we are loved.",
    numbers: [15, 30, 45, 52, 67, 3],
  },
  {
    quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    numbers: [19, 38, 57, 4, 23, 68],
  },
  {
    quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    numbers: [23, 46, 69, 8, 17, 54],
  },
  {
    quote: "I love you because the entire universe conspired to help me find you.",
    numbers: [27, 54, 12, 41, 65, 29],
  },
  {
    quote: "If I had a flower for every time I thought of you, I could walk through my garden forever.",
    numbers: [31, 62, 18, 47, 6, 35],
  },
  {
    quote: "You are my heart, my life, my one and only thought.",
    numbers: [35, 70, 14, 53, 9, 26],
  },
  {
    quote: "Love is that condition in which the happiness of another person is essential to your own.",
    numbers: [39, 7, 28, 56, 11, 64],
  },
  {
    quote: "I love you not because of who you are, but because of who I am when I am with you.",
    numbers: [43, 16, 32, 59, 5, 48],
  },
  {
    quote: "Love is a friendship set to music.",
    numbers: [47, 24, 61, 13, 37, 52],
  },
  {
    quote: "There is only one happiness in this life, to love and be loved.",
    numbers: [51, 2, 39, 66, 21, 44],
  },
  {
    quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    numbers: [55, 10, 43, 69, 25, 38],
  },
  {
    quote: "Love is a game that two can play and both win.",
    numbers: [59, 18, 47, 3, 29, 65],
  },
  {
    quote: "The best love is the kind that awakens the soul and makes us reach for more.",
    numbers: [63, 26, 51, 7, 33, 58],
  },
  {
    quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride.",
    numbers: [67, 34, 55, 11, 37, 62],
  },
  {
    quote: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    numbers: [4, 42, 59, 15, 68, 27],
  },
  {
    quote: "Love is when the other person's happiness is more important than your own.",
    numbers: [8, 46, 63, 19, 35, 52],
  },
  {
    quote: "In case you ever foolishly forget: I am never not thinking of you.",
    numbers: [12, 50, 67, 23, 39, 56],
  },
  {
    quote: "You are, and always have been, my dream.",
    numbers: [16, 54, 2, 27, 43, 60],
  }
];

type CookieState = "unopened" | "cracking" | "opened";

export function FortuneCookie() {
  const [state, setState] = useState<CookieState>("unopened");
  const [currentLoveMessage, setCurrentLoveMessage] =
    useState<LoveMessage | null>(null);

  const crackCookie = () => {
    if (state !== "unopened") return;

    setState("cracking");
    const randomLoveMessage =
      loveMessages[Math.floor(Math.random() * loveMessages.length)];
    setCurrentLoveMessage(randomLoveMessage);

    // Show cracking animation for 2 seconds, then reveal love message
    setTimeout(() => {
      setState("opened");
    }, 2000);
  };

  const getNewCookie = () => {
    setState("unopened");
    setCurrentLoveMessage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-rose-50/80 to-pink-100/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {state === "unopened" && (
          <motion.div
            key="unopened"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              onClick={crackCookie}
              className="cursor-pointer mb-8"
            >
              <div className="relative">
                {/* Heart Shadow */}
                <div className="absolute top-2 left-2 w-32 h-32 bg-black/20 rounded-full blur-xl" />

                {/* Love Heart */}
                <div className="relative">
                  <motion.div
                    animate={{
                      filter: [
                        "drop-shadow(0 0 20px rgba(244, 63, 94, 0.6))",
                        "drop-shadow(0 0 30px rgba(244, 63, 94, 0.8))",
                        "drop-shadow(0 0 20px rgba(244, 63, 94, 0.6))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart
                      className="w-32 h-32 text-rose-400 fill-gradient-to-br from-pink-200 to-rose-300"
                      fill="url(#heart-gradient)"
                      stroke="rgb(244 63 94)"
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Gradient definition for heart fill */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(252 165 165)" />
                        <stop offset="100%" stopColor="rgb(244 63 94)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Sparkle effects */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-pink-400 drop-shadow-lg" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-1 -left-2"
                  >
                    <Sparkles className="w-4 h-4 text-red-400 drop-shadow-lg" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-1/2 -translate-y-1/2 -left-3"
                  >
                    <Sparkles className="w-5 h-5 text-red-300 drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center relative"
            >
              {/* Magical aura around title */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="absolute inset-0 bg-gradient-to-r from-rose-200/30 via-pink-200/30 to-red-200/30 rounded-full blur-2xl transform scale-150"
              />

              {/* Orbiting sparkles around title */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 0.8, 0.6, 0.8],
                    rotate: 360,
                  }}
                  transition={{
                    scale: {
                      delay: 1 + i * 0.1,
                      duration: 0.8,
                    },
                    opacity: {
                      delay: 1 + i * 0.1,
                      duration: 0.8,
                    },
                    rotate: {
                      delay: 1.5,
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 80}%`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 60}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Sparkles
                    className={`w-${i % 2 === 0 ? "3" : "2"} h-${i % 2 === 0 ? "3" : "2"} text-${i % 3 === 0 ? "pink" : i % 3 === 1 ? "rose" : "red"}-400/70`}
                  />
                </motion.div>
              ))}

              {/* Enhanced title with gradient and glow */}
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: "backOut",
                }}
                className="text-3xl mb-3 bg-gradient-to-r from-rose-700 via-pink-600 to-red-700 bg-clip-text text-transparent relative z-10"
                style={{
                  filter:
                    "drop-shadow(0 2px 8px rgba(244, 63, 94, 0.4))",
                  textShadow:
                    "0 0 30px rgba(244, 63, 94, 0.6)",
                }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Love Cookie
                </motion.span>
              </motion.h1>

              {/* Enhanced subtitle with shimmer effect */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-rose-700 mb-4 relative z-10"
                style={{
                  textShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <motion.span className="bg-clip-text">
                  Tap the cookie to reveal your love message!
                </motion.span>
              </motion.p>

              {/* Enhanced magic text with pulsing border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 1px rgba(244, 63, 94, 0.2)",
                      "0 0 0 2px rgba(244, 63, 94, 0.4)",
                      "0 0 0 1px rgba(244, 63, 94, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-50/80 to-pink-50/80 backdrop-blur-sm border border-rose-200/50"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </motion.div>
                  <span className="text-sm text-rose-700 font-medium">
                    Love awaits inside
                  </span>
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-red-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {state === "cracking" && (
          <motion.div
            key="cracking"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 0.8, 1.1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="relative mb-8 w-32 h-32"
            >
              {/* Breaking heart effect */}
              <div className="relative w-32 h-32">
                {/* Left half of heart */}
                <motion.div
                  animate={{ x: [0, -30], rotate: [0, -25], opacity: [1, 0.3] }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute left-0 top-0 overflow-hidden"
                  style={{ width: '50%', height: '100%' }}
                >
                  <Heart
                    className="w-32 h-32 text-rose-400 absolute left-0"
                    fill="url(#heart-gradient-crack)"
                    stroke="rgb(244 63 94)"
                    strokeWidth={2}
                  />
                </motion.div>

                {/* Right half of heart */}
                <motion.div
                  animate={{ x: [0, 30], rotate: [0, 25], opacity: [1, 0.3] }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute right-0 top-0 overflow-hidden"
                  style={{ width: '50%', height: '100%' }}
                >
                  <Heart
                    className="w-32 h-32 text-rose-400 absolute -left-16"
                    fill="url(#heart-gradient-crack)"
                    stroke="rgb(244 63 94)"
                    strokeWidth={2}
                  />
                </motion.div>

                {/* Gradient definition */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="heart-gradient-crack" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(252 165 165)" />
                      <stop offset="100%" stopColor="rgb(244 63 94)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Love particles with hearts */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 120],
                      y: [0, (Math.random() - 0.5) * 120],
                      rotate: [0, Math.random() * 360],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    {i % 3 === 0 ? (
                      <Heart className="w-3 h-3 text-red-300 fill-red-300" />
                    ) : (
                      <Sparkles className="w-2 h-2 text-rose-300" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 2 }}
              className="text-rose-700 text-center"
            >
              Revealing your love message...
            </motion.p>
          </motion.div>
        )}

        {state === "opened" && currentLoveMessage && (
          <motion.div
            key="opened"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.2,
            }}
            className="w-full max-w-md"
          >
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-6 relative"
              >
                {/* Magical glow background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.3 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-rose-200/50 via-pink-200/50 to-red-200/50 rounded-full blur-xl"
                />

                {/* Floating sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0.8, 1],
                      opacity: [0, 1, 0.7, 1],
                      y: [0, -20, 0, -15, 0],
                      x: [
                        0,
                        Math.sin(i) * 20,
                        0,
                        -Math.sin(i) * 15,
                        0,
                      ],
                    }}
                    transition={{
                      delay: 0.8 + i * 0.1,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${10 + (i % 2) * 20}%`,
                    }}
                  >
                    <Sparkles
                      className={`w-${i % 2 === 0 ? "4" : "3"} h-${i % 2 === 0 ? "4" : "3"} text-${i % 3 === 0 ? "pink" : i % 3 === 1 ? "rose" : "red"}-400 drop-shadow-lg`}
                    />
                  </motion.div>
                ))}

                {/* Main sparkle with complex animation */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    rotate: 360,
                  }}
                  transition={{
                    scale: {
                      delay: 0.5,
                      duration: 0.8,
                      ease: "backOut",
                    },
                    rotate: {
                      delay: 0.7,
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="inline-block mb-4 relative z-10"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      filter: [
                        "brightness(1)",
                        "brightness(1.5)",
                        "brightness(1)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-10 h-10 text-rose-500 drop-shadow-2xl" />
                  </motion.div>

                  {/* Pulsing ring around main sparkle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.5, 0.8],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      delay: 0.8,
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 border-2 border-rose-400 rounded-full"
                  />
                </motion.div>

                {/* Enhanced title with gradient and glow */}
                <motion.h2
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                    ease: "backOut",
                  }}
                  className="text-2xl mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent relative z-10"
                  style={{
                    filter:
                      "drop-shadow(0 2px 4px rgba(244, 63, 94, 0.3))",
                    textShadow:
                      "0 0 20px rgba(244, 63, 94, 0.5)",
                  }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Your Love Message
                  </motion.span>
                </motion.h2>
              </motion.div>

              <motion.blockquote
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-700 mb-6 italic leading-relaxed"
              >
                "{currentLoveMessage.quote}"
              </motion.blockquote>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <Button
                  onClick={getNewCookie}
                  className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Get Another Love Message
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}