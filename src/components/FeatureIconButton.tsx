import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

type FeatureIconButtonProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  expanded: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export function FeatureIconButton({
  icon: Icon,
  title,
  description,
  expanded,
  onActivate,
  onDeactivate,
}: FeatureIconButtonProps) {
  const pointerFocus = useRef(false);

  return (
    <button
      className={expanded ? "feature-button feature-button--active" : "feature-button"}
      type="button"
      aria-label={`${title}. ${description}`}
      aria-expanded={expanded}
      onClick={() => {
        onActivate();
        pointerFocus.current = false;
      }}
      onFocus={() => {
        if (!pointerFocus.current) onActivate();
      }}
      onBlur={onDeactivate}
      onPointerDown={() => {
        pointerFocus.current = true;
      }}
      onPointerCancel={() => {
        pointerFocus.current = false;
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onActivate();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") onDeactivate();
      }}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
