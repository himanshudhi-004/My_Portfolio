from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import contact
from database import engine, Base
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create database tables with error handling
try:
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created successfully")
except Exception as e:
    logger.error(f"Error creating database tables: {e}")
    logger.info("Continuing without database table creation...")

app = FastAPI(title="Portfolio API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:5174"],
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