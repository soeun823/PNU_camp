import random
import hashlib

# 목표값 "6567"의 SHA1 해시
TARGET_HASH = hashlib.sha1("6567".encode()).hexdigest()

def transform1(text):
    result = ""
    for char in text:
        if char.isdigit():
            # 0은 Z로, 1-9는 A-I로 변환
            num = int(char)
            if num == 0:
                result += 'Z'
            else:
                result += chr(ord('A') + num - 1)
        else:
            result += char
    print(f"Transform 1 결과 (숫자->알파벳): {result}")
    return result

def transform2(text):
    result = text[::-1]
    print(f"Transform 2 결과 (뒤집기): {result}")
    return result

def transform3(text):
    """ASCII 값으로 변환"""
    result = ''.join(str(ord(c)) for c in text)
    print(f"Transform 3 결과 (ASCII): {result}")
    return result

def apply_transforms(input_text):
    """변환 함수들을 랜덤 순서로 적용"""
    transforms = [transform1, transform2]  # ASCII 변환은 항상 마지막
    
    global random_shuffle  # 디버깅을 위한 전역 변수
    random.shuffle(transforms)
    random_shuffle = [t.__name__ for t in transforms]  # 섞인 순서 저장
    
    print("\n=== 변환 시작 ===")
    print(f"입력값: {input_text}")
    print(f"변환 함수 순서: {random_shuffle} + [transform3]")
    
    result = input_text
    for i, transform in enumerate(transforms, 1):
        print(f"\n{i}번째 변환 ({transform.__name__}):")
        result = transform(result)
        
    # SHA1 해시 생성
    final_hash = hashlib.sha1(result.encode()).hexdigest()
    print(f"\n최종 해시값: {final_hash}")
    print(f"목표 해시값: {TARGET_HASH}")
    
    return final_hash

def check_flag(user_input):
    """사용자 입력 검증"""
    if not all(c.isdigit() or c.isalpha() for c in user_input):
        print("숫자와 알파벳만 입력 가능합니다!")
        return False

    result_hash = apply_transforms(user_input)
    
    if result_hash == TARGET_HASH:
        print("\n축하합니다! 정답입니다!")
        print("변환 결과가 정답 해시값과 일치합니다!")
        return True
    else:
        print("\n틀렸습니다. 다시 시도해보세요.")
        print("힌트: 코드를 참고하세요")
        return False

def main():
    print("=== CTF Challenge ===")
    print("코드를 보고 맞는 입력값을 찾아보세요!")
    print("\n목표 해시값:", TARGET_HASH)
    
    global random_shuffle
    random_shuffle = []
    
    while True:
        user_input = input("\nFlag를 입력하세요 (종료는 'quit'): ")
        if user_input.lower() == 'quit':
            break
        
        check_flag(user_input)
        print("\n현재 변환 순서:", random_shuffle)

if __name__ == "__main__":
    main()