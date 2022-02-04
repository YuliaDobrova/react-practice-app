import { useState } from 'react';
import { HexColorPicker as Picker } from 'react-colorful';

function ColorPicker() {
  const [color, setColor] = useState('#218d98');
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Color Picker</h3>
      <div
        style={{
          background: 'PeachPuff',
          // height: '100vh',
          height: 150,
          margin: 20,
          borderRadius: 12,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: color,
            borderRadius: 10,
          }}
        >
          <Picker
            style={{ width: 150, height: 150 }}
            color={color}
            onChange={setColor}
          />
        </div>
        Selected color {JSON.stringify(color)}
      </div>
    </>
  );
}

export default ColorPicker;
