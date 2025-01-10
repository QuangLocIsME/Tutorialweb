import flower1 from '../Avatar/assets/image1.png'
import flower2 from '../Avatar/assets/image2.png'
import flower3 from '../Avatar/assets/image3.png'
import Avatar from '../Avatar/Avatar'

export function Bai4() {
    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            padding: '20px'
        }}>
            <Avatar src={flower1} size={{ width: 200, height: 200 }} />
            <Avatar src={flower2} size={{ width: 150, height: 150 }} />
            <Avatar src={flower3} size={{ width: 100, height: 100 }} />
        </div>
    );
}