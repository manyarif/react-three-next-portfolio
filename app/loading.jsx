export default function Loading() {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            flexDirection: 'column'
        }}>
            <div className="loading-spinner" />
            <p>Loading amazing content...</p>
        </div>
    );
}
