import { FC, ReactNode, useState } from 'react';

interface SideBarProps {
  indexItems: {
    index: string;
    brief: ReactNode;
  }[];
  activeIndex: string | null;
  onActive: (index: string) => void;
}

export const SideBar: FC<SideBarProps> = props => {
  const [intersecting, setIntersecting] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        userSelect: 'none',
        touchAction: 'none'
      }}
      onMouseDown={() => setIntersecting(true)}
      onMouseUp={() => setIntersecting(false)}
      onTouchStart={() => setIntersecting(true)}
      onTouchEnd={() => setIntersecting(false)}
      onTouchMove={e => {
        if (!intersecting) return;
        const { clientX, clientY } = e.touches[0];
        const target = document.elementFromPoint(
          clientX,
          clientY
        ) as HTMLElement;
        if (!target) return;
        const index = target.dataset['index'];
        if (index) {
          props.onActive(index);
        }
      }}>
      {props.indexItems.map(({ index, brief }) => {
        return (
          <div
            style={{
              cursor: 'pointer',
              width: 'auto',
              position: 'relative',
              padding: '0 12px'
            }}
            onMouseDown={() => props.onActive(index)}
            onTouchStart={() => props.onActive(index)}
            data-index={index}
            key={index}>
            {brief}
          </div>
        );
      })}
    </div>
  );
};
