// import { cn } from "@/lib/utils";

// interface SkillLevelProps {
//   level: number;
//   maxLevel?: number;
//   showLabel?: boolean;
// }

// const levelLabels = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

// export function SkillLevel({
//   level,
//   maxLevel = 5,
//   showLabel = false,
// }: SkillLevelProps) {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex gap-1">
//         {Array.from({ length: maxLevel }).map((_, i) => (
//           <div
//             key={i}
//             className={cn(
//               "h-2 w-6 rounded-full transition-colors",
//               i < level ? "bg-accent" : "bg-muted",
//             )}
//           />
//         ))}
//       </div>
//       {showLabel && (
//         <span className="text-xs text-muted-foreground">
//           {levelLabels[level - 1]}
//         </span>
//       )}
//     </div>
//   );
// }
import { cn } from "@/lib/utils";

interface SkillLevelProps {
  level: number;
  maxLevel?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
  animated?: boolean;
}

const levelLabels = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

const sizeClasses = {
  sm: "h-1.5 w-4",
  md: "h-2 w-6",
  lg: "h-3 w-8",
};

const variantClasses = {
  default: "bg-accent",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

export function SkillLevel({
  level,
  maxLevel = 5,
  showLabel = false,
  size = "md",
  variant = "default",
  animated = true,
}: SkillLevelProps) {
  // хамгаалалт (1–maxLevel хооронд)
  const safeLevel = Math.min(Math.max(level, 1), maxLevel);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: maxLevel }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-full transition-all duration-300 ease-in-out",
              sizeClasses[size],
              i < safeLevel ? variantClasses[variant] : "bg-muted",
              animated && "transform scale-100",
            )}
          />
        ))}
      </div>

      {showLabel && (
        <span className="text-xs text-muted-foreground">
          {levelLabels[safeLevel - 1]}
        </span>
      )}
    </div>
  );
}
