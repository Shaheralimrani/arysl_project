from db import get_db_connection

def fetch_all_classes():
    """جلب الفئات من قاعدة البيانات"""
    conn = get_db_connection()
    if not conn:
        return None
    
    try:
        cur = conn.cursor()
        cur.execute("""
            SELECT english_name, arabic_name 
            FROM classes 
            ORDER BY class_no_in_dictionary
        """)
        rows = cur.fetchall()
        cur.close()
        
        # تحويل النتيجة لشكل يفهمه Pydantic
        return [{"english": r[0], "arabic": r[1]} for r in rows]
    finally:
        conn.close()