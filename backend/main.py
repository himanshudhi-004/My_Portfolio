from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import contact
from database import engine, Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "https://your-netlify-site.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router)

@app.get("/")
def root():
    return {"message": "Portfolio API is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}