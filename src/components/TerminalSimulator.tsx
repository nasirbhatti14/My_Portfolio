import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Play, RotateCcw, X, HelpCircle, ChevronRight, CornerDownLeft } from 'lucide-react';
import { ExpenseItem } from '../types';

interface TerminalSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialExpenses: ExpenseItem[] = [
  { id: '1', description: 'Python Textbook', amount: 45, category: 'Education', date: '2026-07-02' },
  { id: '2', description: 'Campus Lunch', amount: 12, category: 'Food', date: '2026-07-04' },
  { id: '3', description: 'Bus Fare', amount: 8, category: 'Travel', date: '2026-07-05' }
];

export default function TerminalSimulator({ isOpen, onClose }: TerminalSimulatorProps) {
  const [expenses, setExpenses] = useState<ExpenseItem[]>(initialExpenses);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Python 3.11.4 (default, May 24 2026, 14:02:18)',
    '[GCC 11.2.0] on linux',
    'Type "help" to see available Expense Tracker commands.',
    'System ready. Local storage synced.'
  ]);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    const parts = trimmedCommand.split(' ');
    const baseCmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory = [...history, `nasir@expense-tracker:~$ ${trimmedCommand}`];

    switch (baseCmd) {
      case 'help':
        newHistory.push(
          'Available Commands:',
          '  help                         - Show this help manual',
          '  list                         - Display all logged student expenses',
          '  add [desc] [amount] [cat]     - Log a new expense (e.g. add Pizza 15 Food)',
          '  total                        - Calculate aggregate spending sum',
          '  delete [id]                  - Erase an expense item by ID number',
          '  reset                        - Restore original demonstration items',
          '  clear                        - Wipe terminal console history',
          '  exit                         - Close terminal window'
        );
        break;

      case 'list':
        if (expenses.length === 0) {
          newHistory.push('No expenses recorded. Try adding one with the "add" command.');
        } else {
          newHistory.push(
            '------------------------------------------------------------',
            'ID   | Description          | Amount    | Category   | Date',
            '------------------------------------------------------------'
          );
          expenses.forEach(exp => {
            const idCol = exp.id.padEnd(4);
            const descCol = exp.description.padEnd(20).substring(0, 20);
            const amtCol = `$${exp.amount.toFixed(2)}`.padEnd(10);
            const catCol = exp.category.padEnd(11).substring(0, 11);
            newHistory.push(`${idCol} | ${descCol} | ${amtCol} | ${catCol} | ${exp.date}`);
          });
          newHistory.push('------------------------------------------------------------');
        }
        break;

      case 'add': {
        // Syntax: add Description Amount Category
        if (args.length < 3) {
          newHistory.push('❌ Error: Incomplete arguments. Syntax: add [description] [amount] [category]');
          newHistory.push('Example: add Notebook 18.50 Education');
          break;
        }

        const category = args[args.length - 1];
        const amountStr = args[args.length - 2];
        const amount = parseFloat(amountStr);
        const description = args.slice(0, args.length - 2).join(' ');

        if (isNaN(amount) || amount <= 0) {
          newHistory.push(`❌ Error: Invalid amount "${amountStr}". Amount must be a positive number.`);
          break;
        }

        const newExp: ExpenseItem = {
          id: (expenses.length > 0 ? Math.max(...expenses.map(e => parseInt(e.id) || 0)) + 1 : 1).toString(),
          description,
          amount,
          category,
          date: new Date().toISOString().split('T')[0]
        };

        setExpenses([...expenses, newExp]);
        newHistory.push(`✅ Success: Added expense "${description}" for $${amount.toFixed(2)} [${category}].`);
        break;
      }

      case 'total': {
        const sum = expenses.reduce((acc, curr) => acc + curr.amount, 0);
        newHistory.push(`------------------------------------------------------------`);
        newHistory.push(`💰 TOTAL EXPENDITURE: $${sum.toFixed(2)}`);
        newHistory.push(`📊 Item Count: ${expenses.length} transaction(s)`);
        newHistory.push(`------------------------------------------------------------`);
        break;
      }

      case 'delete': {
        if (args.length < 1) {
          newHistory.push('❌ Error: Missing ID. Syntax: delete [id]');
          break;
        }
        const targetId = args[0];
        const exists = expenses.some(exp => exp.id === targetId);

        if (!exists) {
          newHistory.push(`❌ Error: Expense ID "${targetId}" not found. Type "list" to view existing IDs.`);
        } else {
          setExpenses(expenses.filter(exp => exp.id !== targetId));
          newHistory.push(`✅ Success: Deleted expense item with ID: ${targetId}`);
        }
        break;
      }

      case 'reset':
        setExpenses(initialExpenses);
        newHistory.push('🔄 Environment state reset to original demonstration items.');
        break;

      case 'clear':
        setHistory([]);
        setCommand('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push(`❌ Command not recognized: "${baseCmd}". Type "help" for valid options.`);
    }

    setHistory(newHistory);
    setCommand('');
  };

  const autofillCommand = (cmdStr: string) => {
    setCommand(cmdStr);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-3xl overflow-hidden shadow-2xl glass-panel border border-violet-500/20 rounded-xl">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" title="Close" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center space-x-1.5 ml-4">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-mono text-zinc-400 font-medium">nasir-iqbal@portfolio:~ python tracker.py</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Info panel / helper buttons */}
        <div className="px-4 py-2 bg-violet-950/20 border-b border-violet-900/10 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-zinc-400 font-sans flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-violet-400" /> 
            Interactive demo. Click below to auto-fill commands:
          </span>
          <div className="flex gap-1.5">
            <button 
              onClick={() => autofillCommand('help')}
              className="text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-violet-300 border border-violet-900/40 px-1.5 py-0.5 rounded transition-colors"
            >
              help
            </button>
            <button 
              onClick={() => autofillCommand('list')}
              className="text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-violet-300 border border-violet-900/40 px-1.5 py-0.5 rounded transition-colors"
            >
              list
            </button>
            <button 
              onClick={() => autofillCommand('add Coffee 4 Food')}
              className="text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-violet-300 border border-violet-900/40 px-1.5 py-0.5 rounded transition-colors"
            >
              + add
            </button>
            <button 
              onClick={() => autofillCommand('total')}
              className="text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-violet-300 border border-violet-900/40 px-1.5 py-0.5 rounded transition-colors"
            >
              total
            </button>
            <button 
              onClick={() => setExpenses(initialExpenses)}
              className="text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-900/40 px-1.5 py-0.5 rounded flex items-center gap-0.5 transition-colors"
            >
              <RotateCcw className="w-2.5 h-2.5" /> reset
            </button>
          </div>
        </div>

        {/* Console Panel */}
        <div 
          className="h-80 overflow-y-auto p-4 bg-zinc-950/90 font-mono text-xs md:text-sm text-zinc-300 space-y-1.5"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => {
            let lineClass = 'text-zinc-300';
            if (line.startsWith('nasir@expense-tracker:~$')) {
              lineClass = 'text-violet-400 font-semibold';
            } else if (line.startsWith('✅')) {
              lineClass = 'text-emerald-400';
            } else if (line.startsWith('❌')) {
              lineClass = 'text-red-400';
            } else if (line.includes('TOTAL EXPENDITURE') || line.startsWith('💰')) {
              lineClass = 'text-amber-400 font-bold';
            } else if (line.startsWith('Available Commands:') || line.startsWith('ID   |')) {
              lineClass = 'text-zinc-400';
            } else if (line.startsWith('  help') || line.startsWith('  list') || line.startsWith('  add') || line.startsWith('  total') || line.startsWith('  delete')) {
              lineClass = 'text-zinc-300 pl-4';
            }

            return (
              <div key={idx} className={`${lineClass} whitespace-pre-wrap leading-relaxed`}>
                {line}
              </div>
            );
          })}
          <div ref={consoleEndRef} />
        </div>

        {/* Console Input Bar */}
        <form 
          onSubmit={handleCommandSubmit}
          className="flex items-center px-4 py-3 bg-zinc-950 border-t border-zinc-800 font-mono text-sm"
        >
          <span className="text-violet-400 font-semibold mr-2 flex items-center">
            nasir@expense-tracker:~$ <ChevronRight className="w-3.5 h-3.5 text-violet-500 ml-0.5 animate-pulse" />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-zinc-100 focus:ring-0 placeholder-zinc-700 font-mono"
            placeholder='Type command (e.g. "list", "help")'
            autoFocus
          />
          <button 
            type="submit" 
            className="text-violet-400 hover:text-violet-300 p-1 rounded hover:bg-zinc-900 transition-all flex items-center gap-1 text-xs px-2"
          >
            Run <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
}
