interface CardProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({ title, children }: CardProps) {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    );
  }