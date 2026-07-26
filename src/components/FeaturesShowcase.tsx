import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { heroDashboardImg, mascotImg } from '../assets/images';
import { ScrollGlowText } from './ScrollGlowText';
import { 
  CheckCircle2, Circle, Flame, Cat, 
  Plus, Play, Pause, RotateCcw, Search, Wallet, Calendar, FileText, Timer
} from 'lucide-react';

export const FeaturesShowcase: React.FC = () => {
  // Interactive states for Pomodoro
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500); // 25 min
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Interactive states for Habits
  const [habitChecks, setHabitChecks] = useState<Record<string, boolean>>({
    'h1': true,
    'h2': true,
    'h3': false
  });

  // Interactive states for Tasks
  const [taskChecks, setTaskChecks] = useState<Record<string, boolean>>({
    't1': true,
    't2': true,
    't3': false
  });

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, pomodoroSeconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleHabit = (id: string) => {
    setHabitChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTask = (id: string) => {
    setTaskChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="recursos" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
            <Cat className="w-3.5 h-3.5" />
            <span>Ecossistema Completo Neko</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Tudo o que sua rotina precisa num <span className="text-[#FF6B00]">bento grid inteligente</span>.
          </h2>
          <ScrollGlowText className="text-base font-normal leading-relaxed text-center">
            Sem alternar entre 5 aplicativos diferentes. O Neko Productivity unifica tarefas, hábitos, finanças, notas e timer Pomodoro com sincronização em nuvem e mascote em tempo real.
          </ScrollGlowText>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* BENTO ITEM 1: Large Featured Card - Dashboard & Mascot Status (Spans 8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#201F1F] border border-[#2A2A2A] shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-[#FF6B00]/40 transition-all"
          >
            <div className="space-y-4 max-w-xl z-10 relative">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
                <Cat className="w-4 h-4" />
                <span>Módulo Central</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E5E2E1]">
                Dashboard Unificado & Mascot Companion
              </h3>
              <ScrollGlowText className="text-xs sm:text-sm leading-relaxed" delay={0.05}>
                Visualize o resumo do seu dia com saudação personalizada, sequência de hábitos, nível de XP do seu gato preto e gráfico de produtividade semanal num relance.
              </ScrollGlowText>
            </div>

            {/* Embedded Screenshot & Live Card */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#353534] bg-[#0A0A0A] relative group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src={heroDashboardImg}
                alt="App Dashboard Real Screen"
                className="w-full h-52 sm:h-64 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201F1F] via-transparent to-transparent pointer-events-none" />
              
              {/* Mascot Floating Status inside Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center gap-3">
                <img src={mascotImg} alt="Divo do Gatinho" className="w-9 h-9 rounded-full object-cover border border-[#FF6B00]" />
                <div className="text-xs">
                  <div className="font-extrabold text-[#E5E2E1]">Divo do Gatinho · Nível 8</div>
                  <div className="text-[11px] text-[#FFB693]">"3 de 4 metas diárias concluídas hoje!"</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BENTO ITEM 2: Medium Card - Controle Financeiro (Spans 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#201F1F] border border-[#2A2A2A] shadow-2xl flex flex-col justify-between hover:border-[#FF6B00]/40 transition-all"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#E5E2E1]">
                Controle Financeiro
              </h3>
              <ScrollGlowText className="text-xs leading-relaxed" delay={0.08}>
                Entradas, saídas e saldo acumulado de forma intuitiva. Saiba exatamente para onde vai seu dinheiro.
              </ScrollGlowText>
            </div>

            {/* Interactive Finance Card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#131313] border border-[#353534] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#888888]">Saldo Total</span>
                <span className="font-black text-[#4CAF50] text-sm">R$ 3.840,00</span>
              </div>
              <div className="space-y-2 border-t border-[#201F1F] pt-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#E5E2E1]">Freelance Neko</span>
                  <span className="font-bold text-[#4CAF50]">+ R$ 2.500</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#E5E2E1]">Supermercado</span>
                  <span className="font-bold text-[#FF4444]">- R$ 340</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BENTO ITEM 3: Small Card - Agenda & Tarefas (Spans 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 p-6 rounded-3xl bg-[#201F1F] border border-[#2A2A2A] shadow-xl hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#252525] border border-[#353534] flex items-center justify-center text-[#FFB693] mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-[#E5E2E1]">Agenda & Tarefas</h4>
              <p className="text-xs text-[#888888]">Prioridades, datas de entrega e categorias por projeto.</p>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { id: 't1', label: 'Estudar para a prova', tag: 'Estudo' },
                { id: 't2', label: 'Comprar ração do gato', tag: 'Pessoal' },
              ].map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="w-full p-2.5 rounded-xl bg-[#131313] border border-[#2A2A2A] text-left flex items-center justify-between text-xs cursor-pointer hover:border-[#FF6B00]"
                >
                  <div className="flex items-center gap-2">
                    {taskChecks[task.id] ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50]" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 text-[#888888]" />
                    )}
                    <span className={taskChecks[task.id] ? 'line-through text-[#888888]' : 'text-[#E5E2E1]'}>
                      {task.label}
                    </span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#2A2A2A] text-[#FFB693] font-mono">
                    {task.tag}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* BENTO ITEM 4: Small Card - Hábitos & Streaks (Spans 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 p-6 rounded-3xl bg-[#201F1F] border border-[#2A2A2A] shadow-xl hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#252525] border border-[#353534] flex items-center justify-center text-[#FF6B00] mb-3">
                <Flame className="w-4 h-4 fill-[#FF6B00]" />
              </div>
              <h4 className="text-lg font-bold text-[#E5E2E1]">Hábitos & Habit Dots</h4>
              <p className="text-xs text-[#888888]">Construa hábitos diários com apenas um toque e acompanhe o streak.</p>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { id: 'h1', name: 'Beber 2L de Água', streak: '14d' },
                { id: 'h2', name: 'Exercício 30min', streak: '5d' },
              ].map((habit) => (
                <div key={habit.id} className="p-2.5 rounded-xl bg-[#131313] border border-[#2A2A2A] flex items-center justify-between text-xs">
                  <span className="text-[#E5E2E1] font-medium">{habit.name}</span>
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      habitChecks[habit.id] ? 'bg-[#FF6B00] text-white' : 'bg-[#252525] text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BENTO ITEM 5: Small Card - Pomodoro Focus (Spans 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 p-6 rounded-3xl bg-[#201F1F] border border-[#2A2A2A] shadow-xl hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#252525] border border-[#353534] flex items-center justify-center text-[#FFB693] mb-3">
                <Timer className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-[#E5E2E1]">Timer Pomodoro</h4>
              <p className="text-xs text-[#888888]">Ciclos de foco e pausa para produtividade imersiva.</p>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-[#131313] border border-[#2A2A2A] text-center space-y-2">
              <div className="text-xl font-mono font-black text-[#FF6B00]">
                {formatTime(pomodoroSeconds)}
              </div>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-3.5 py-1 rounded-full bg-[#FF6B00] text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isTimerRunning ? 'Pausar' : 'Iniciar'}</span>
                </button>
                <button
                  onClick={() => { setIsTimerRunning(false); setPomodoroSeconds(1500); }}
                  className="p-1 rounded-full bg-[#2A2A2A] text-[#888] hover:text-white cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
