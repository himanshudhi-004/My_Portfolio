#!/usr/bin/env python3

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database import engine, Base, get_db
from main import app
import logging

def test_database():
    """Test database connection and table creation"""
    try:
        # Test database connection
        print("Testing database connection...")
        Base.metadata.create_all(bind=engine)
        print("✓ Database connection successful")
        
        # Test database session
        print("Testing database session...")
        db_gen = get_db()
        db = next(db_gen)
        print("✓ Database session created successfully")
        db.close()
        
        return True
    except Exception as e:
        print(f"✗ Database test failed: {e}")
        return False

def test_fastapi():
    """Test FastAPI app creation"""
    try:
        print("Testing FastAPI app...")
        print(f"✓ FastAPI app created: {app.title}")
        return True
    except Exception as e:
        print(f"✗ FastAPI test failed: {e}")
        return False

def main():
    print("=== Portfolio Backend Test ===")
    
    # Test database
    db_ok = test_database()
    
    # Test FastAPI
    api_ok = test_fastapi()
    
    if db_ok and api_ok:
        print("\n✓ All tests passed! The backend is ready to run.")
        print("\nTo start the server, run:")
        print("python -m uvicorn main:app --reload --port 8000")
        return 0
    else:
        print("\n✗ Some tests failed. Please check the errors above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
