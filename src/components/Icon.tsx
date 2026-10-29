import { getIconData, iconToSVG, iconToHTML } from "@iconify/utils";

// 1. Statically import the specific sets you want to support
import mdiIcons from "@iconify-json/mdi/icons.json" with { type: "json" };
import lucideIcons from "@iconify-json/lucide/icons.json" with { type: "json" };
import phIcons from "@iconify-json/ph/icons.json" with { type: "json" };

// 2. Map prefixes to their respective imported datasets
const iconSets: Record<string, any> = {
  mdi: mdiIcons,
  lucide: lucideIcons,
  ph: phIcons,
};

interface IconProps {
  icon: string; // Supports "mdi:home", "lucide:check", "ph:user", etc.
  width?: string | number;
  height?: string | number;
  color?: string;
}

export function Icon({
  icon,
  width = 24,
  height = 24,
  color = "currentColor",
}: IconProps) {
  const [prefix, name] = icon.split(":");

  // 3. Look up the dataset matching the icon's prefix
  const activeSet = iconSets[prefix];
  if (!activeSet) {
    console.warn(`Iconify prefix "${prefix}" is not supported or imported.`);
    return null;
  }

  // 4. Retrieve individual icon data safely from the targeted set
  const iconData = getIconData(activeSet, name);
  if (!iconData) {
    console.warn(`Icon "${name}" not found in set "${prefix}".`);
    return null;
  }

  const renderData = iconToSVG(iconData, { height, width });

  const attributes: Record<string, string> = {
    ...renderData.attributes,
    width: String(width),
    height: String(height),
    fill: color,
    "aria-hidden": "true",
  };

  const svgString = iconToHTML(renderData.body, attributes);

  return <span dangerouslySetInnerHTML={{ __html: svgString }} />;
}

// Usage
// import { Icon } from '../components/Icon'
//
// {/* Material Design Icons */}
// <Icon icon="mdi:home" color="#3b82f6" />
//
// {/* Lucide Icons */}
// <Icon icon="lucide:settings" color="#10b981" width={32} height={32} />
//
// {/* Phosphor Icons */}
// <Icon icon="ph:user-bold" color="#ef4444" />
